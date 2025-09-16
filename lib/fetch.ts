import { ActionResponse } from "@/types/global";

import handleError from "./handlers/error";
import { RequestError } from "./http-errors";
import logger from "./logger";

interface FetchOptions extends RequestInit {
  timeout?: number;
}

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function fetchHandler<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ActionResponse<T>> {
  const { timeout = 5000, headers: customHeaders, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const headers: HeadersInit = {
    ...defaultHeaders,
    ...customHeaders,
  };

  const config: RequestInit = {
    ...fetchOptions,
    headers,
    signal: controller.signal,
  };

  try {
    const response = await fetch(url, config);
    clearTimeout(id);

    if (!response.ok) {
      throw new RequestError(
        response.status,
        `HTTP error! status: ${response.status}`
      );
    }

    return (await response.json()) as ActionResponse<T>;
  } catch (error) {
    const err = isError(error) ? error : new Error("An unknown error occurred");

    if (err.name === "AbortError") {
      logger.warn(`Request to ${url} timed out after ${timeout}ms`);
    } else {
      logger.error(`Error fetching ${url}: ${err.message}`);
    }

    return handleError(err) as ActionResponse<T>;
  }
}
