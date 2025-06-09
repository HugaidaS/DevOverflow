import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

// Rationale: Next.js functions can be invoked multiple times, leading to multiple connections to the database.
// Without caching, this can lead to performance issues and connection limits being hit.
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Singleton pattern to cache the Mongoose connection
declare global {
  // var declaration is used on purpose to have a global variable that persists across module reloads
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache;
}

const cached = global.mongooseCache;

if (!cached) {
  global.mongooseCache = {
    connection: null,
    promise: null,
  };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "devFlow",
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw new Error("Failed to connect to MongoDB");
      });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};

export default dbConnect;
