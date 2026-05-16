import { Model } from "mongoose";
import dbConnect from "./dbConnect";


export async function moveUpRecord<T>(
    model: Model<T>,
    id: string
) {
    await dbConnect();

    const currentItem: any = await model.findById(id);

    if (!currentItem) {
        throw new Error("Record not found");
    }

    if (currentItem.order === 1) {
        return currentItem;
    }

    const upperItem: any = await model.findOne({
        order: currentItem.order - 1
    });

    if (!upperItem) {
        return currentItem;
    }

    await model.findByIdAndUpdate(currentItem._id, {
        order: upperItem.order
    });

    await model.findByIdAndUpdate(upperItem._id, {
        order: currentItem.order
    });

    return true;
}


export async function moveDownRecord<T>(
    model: Model<T>,
    id: string
) {
    await dbConnect();

    const currentItem: any = await model.findById(id);

    if (!currentItem) {
        throw new Error("Record not found");
    }

    const lowerItem: any = await model.findOne({
        order: currentItem.order + 1
    });

    if (!lowerItem) {
        return currentItem;
    }

    await model.findByIdAndUpdate(currentItem._id, {
        order: lowerItem.order
    });

    await model.findByIdAndUpdate(lowerItem._id, {
        order: currentItem.order
    });

    return true;
}