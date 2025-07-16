import mongoose, { Document, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true },
    questions: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Tag = models?.Tag || mongoose.model<ITag>("Tag", TagSchema);

export default Tag;
