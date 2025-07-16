import mongoose, { models, Schema } from "mongoose";

export interface IModel {}

const ModelSchema = new Schema<IModel>(
  {},
  {
    timestamps: true,
  }
);

const Model = models?.Model || mongoose.model<IModel>("Model", ModelSchema);

export default Model;
