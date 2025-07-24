export class RequestError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(
    statusCode: number,
    message: string,
    fieldErrors?: Record<string, string[]>
  ) {
    super(message);
    this.status = statusCode;
    this.errors = fieldErrors;
    this.name = "RequestError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends RequestError {
  constructor(fieldErrors: Record<string, string[]>) {
    const message = ValidationError.formatMessage(fieldErrors);
    super(400, message, fieldErrors);
    this.name = ValidationError.formatMessage(fieldErrors);
    this.name = "ValidationError";
    this.errors = fieldErrors;
  }

  static formatMessage(fieldErrors?: Record<string, string[]>): string {
    if (!fieldErrors) return "Validation Error";

    const formattedMessages = Object.entries(fieldErrors).map(
      ([key, messages]) => {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1);

        if (messages[0] === "Required") {
          return `${fieldName} is required`;
        } else {
          return messages.join(" and ");
        }
      }
    );

    return formattedMessages.join(", ");
  }
}

export class NotFoundError extends RequestError {
  constructor(message: string) {
    super(404, message);
    this.name = "NotFoundError";
  }
}

export class ForbiddenError extends RequestError {
  constructor(message: string) {
    super(403, message);
    this.name = "ForbiddenError";
  }
}

export class UnauthorizedError extends RequestError {
  constructor(message: string) {
    super(401, message);
    this.name = "UnauthorizedError";
  }
}
