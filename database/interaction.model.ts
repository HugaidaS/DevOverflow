import mongoose, { models, Schema } from "mongoose";

export interface IInteraction {
  user: mongoose.Types.ObjectId;
  action: string; // e.g., "upvote", "downvote", "comment"
  actionId: mongoose.Types.ObjectId; // ID of the Question or Answer
  actionType: "Question" | "Answer"; // Type of the action target
}

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
