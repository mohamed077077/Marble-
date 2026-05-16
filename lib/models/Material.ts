import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Material extends IBaseItem {}

const MaterialSchema: Schema<Material> = new Schema(BaseSchemaFields, BaseSchemaOptions);

export const Material: Model<Material> = mongoose.models.Material || mongoose.model<Material>("Material", MaterialSchema);
