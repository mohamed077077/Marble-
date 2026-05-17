import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Material extends IBaseItem {
  title?: string; 
  type: string; 
}
const MaterialSchemaFields = {
  ...BaseSchemaFields, 
  
  type: {
    type: String,    
    required: true,  
  }
};

const MaterialSchema: Schema<Material> = new Schema(MaterialSchemaFields, BaseSchemaOptions);

if (mongoose.models.Material) {
  delete mongoose.models.Material;
}

export const Material: Model<Material> = mongoose.model<Material>("Material", MaterialSchema);