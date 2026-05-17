import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Project extends IBaseItem {}

const ProjectSchema: Schema = new Schema(BaseSchemaFields, BaseSchemaOptions);

if (mongoose.models.Project) {
    delete mongoose.models.Project;
}

export const Project: Model<Project> = mongoose.model<Project>("Project", ProjectSchema);
