import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Product extends IBaseItem {}

const ProductSchema: Schema<Product> = new Schema(BaseSchemaFields, BaseSchemaOptions);

export const Product: Model<Product> = mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);
