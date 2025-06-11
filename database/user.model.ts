import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image?: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      default: "https://www.gravatar.com/avatar/",
    },
    location: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: String,
      trim: true,
    },
    reputation: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
