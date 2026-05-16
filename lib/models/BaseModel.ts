import { Document } from "mongoose";

export interface IBaseItem extends Document {
    title: string;
    imageUrl: string;
    order: number;
}

export const BaseSchemaFields = {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    order: { type: Number, required: true }
};

export const BaseSchemaOptions = { 
    timestamps: true 
};
