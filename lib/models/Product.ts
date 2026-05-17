import mongoose, { Schema, Model } from "mongoose";
import { IBaseItem, BaseSchemaFields, BaseSchemaOptions } from "./BaseModel";

export interface Product extends IBaseItem {}

const ProductSchema: Schema<Product> = new Schema(BaseSchemaFields, BaseSchemaOptions);

if (mongoose.models.Product) {
    delete mongoose.models.Product;
}

export const Product: Model<Product> = mongoose.model<Product>("Product", ProductSchema);
