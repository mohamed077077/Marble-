import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Project extends IBaseItem {}

const ProjectSchema: Schema = new Schema(BaseSchemaFields, BaseSchemaOptions);

export const Project: Model<Project> = mongoose.models.Project || mongoose.model<Project>("Project", ProjectSchema);
