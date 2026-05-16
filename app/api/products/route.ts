import { NextResponse } from 'next/server';
import { getRecords, createRecord, updateRecord, deleteRecord } from '../../../lib/crudHelpers';
import { moveDownRecord, moveUpRecord } from '../../../lib/swapHelpers';
import { Product } from '@/lib/models/Product';



export async function GET() {
    try {
        const products = await getRecords(Product);
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newProduct = await createRecord(Product, data);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }
        const data = await request.json();
        const updatedProduct = await updateRecord(Product, id, data);
        if (!updatedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json(updatedProduct);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function PATCH(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const id = searchParams.get('id');
        const vote = searchParams.get('vote');

        if (!id) {
            return NextResponse.json(
                { error: 'Project ID is required' },
                { status: 400 }
            );
        }

        // MOVE UP
        if (vote === "up") {
            await moveUpRecord(Product, id);

            return NextResponse.json({
                success: true,
                message: "Product moved up"
            });
        }

        // MOVE DOWN
        if (vote === "down") {
            await moveDownRecord(Product, id);

            return NextResponse.json({
                success: true,
                message: "Product moved down"
            });
        }

        // NORMAL UPDATE
        const data = await request.json();

        const updatedProduct = await updateRecord(
            Product,
            id,
            data
        );

        if (!updatedProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedProduct);

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }
        const deletedProduct = await deleteRecord(Product, id);
        if (!deletedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
