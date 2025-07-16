import mongoose, { Document, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string; // e.g., "upvote", "downvote", "comment"
  actionId: Types.ObjectId; // ID of the Question or Answer
  actionType: "Question" | "Answer"; // Type of the action target
}

export interface IInteractionDoc extends IInteraction, Document {}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: {
      type: String,
      required: true,
    },
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "actionType",
    },
    actionType: { type: String, enum: ["Question", "Answer"], required: true },
  },
  {
    timestamps: true,
  }
);

const Interaction =
  models?.Interaction ||
  mongoose.model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
