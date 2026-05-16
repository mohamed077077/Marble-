import { Model, Document } from "mongoose";
import dbConnect from "./dbConnect";

// Create
export async function createRecord<T>(model: Model<T>, data: Partial<T>) {
    await dbConnect();
    const lastItem = await model
    .findOne({})
    .sort({ order: -1 })
    const newOrder = lastItem ? (lastItem as any).order + 1 : 1;
    const newRecord = new model({...data, order: newOrder}  );
    return await newRecord.save();
}

// Read All
export async function getRecords<T>(model: Model<T>, filter: any = {}) {
    await dbConnect();
    return await model.find(filter).sort({ order: 1, createdAt: -1 }).lean();
}


// Update
export async function updateRecord<T>(model: Model<T>, id: string, data: Partial<T>) {
    await dbConnect();
    return await model.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
}

// Delete
export async function deleteRecord<T>(model: Model<T>, id: string) {
    await dbConnect();
        const deletedRecord: any = await model.findById(id);
        if (!deletedRecord) {
            throw new Error("Record not found");
        }

        const deletedOrder = deletedRecord.order;

        await model.updateMany(
            { order: { $gt: deletedOrder } },
            { $inc: { order: -1 } }
        );
// give me items witch order is bigger than the deleted order
// increase there order value by -1
    return await model.findByIdAndDelete(id);
}
