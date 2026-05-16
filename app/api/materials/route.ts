import { NextResponse } from 'next/server';
import { getRecords, createRecord, updateRecord, deleteRecord } from '../../../lib/crudHelpers';
import { moveUpRecord, moveDownRecord } from "../../../lib/swapHelpers";
import { Material } from '@/lib/models/Material';

export async function GET() {
    try {
        const materials = await getRecords(Material);
        return NextResponse.json(materials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load materials' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newMaterial = await createRecord(Material, data);
        return NextResponse.json(newMaterial, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Material ID is required' }, { status: 400 });
        }
        const data = await request.json();
        const updatedMaterial = await updateRecord(Material, id, data);
        if (!updatedMaterial) {
            return NextResponse.json({ error: 'Material not found' }, { status: 404 });
        }
        return NextResponse.json(updatedMaterial);
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
            await moveUpRecord(Material, id);

            return NextResponse.json({
                success: true,
                message: "Material moved up"
            });
        }

        // MOVE DOWN
        if (vote === "down") {
            await moveDownRecord(Material, id);

            return NextResponse.json({
                success: true,
                message: "Material moved down"
            });
        }

        // NORMAL UPDATE
        const data = await request.json();

        const updatedMaterial = await updateRecord(
            Material,
            id,
            data
        );

        if (!updatedMaterial) {
            return NextResponse.json(
                { error: 'Material not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedMaterial);

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
            return NextResponse.json({ error: 'Material ID is required' }, { status: 400 });
        }
        const deletedMaterial = await deleteRecord(Material, id);
        if (!deletedMaterial) {
            return NextResponse.json({ error: 'Material not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Material deleted successfully', deletedMaterial });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
