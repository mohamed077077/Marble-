import { NextResponse } from 'next/server';
import { getRecords, createRecord, updateRecord, deleteRecord } from '../../../lib/crudHelpers';
import { moveDownRecord, moveUpRecord } from '../../../lib/swapHelpers';
import { Project } from '../../../lib/models/Project';



export async function GET() {
    try {
        const projects = await getRecords(Project);
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newProject = await createRecord(Project, data);
        return NextResponse.json(newProject, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
        }
        const data = await request.json();
        const updatedProject = await updateRecord(Project, id, data);
        if (!updatedProject) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json(updatedProject);
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
            await moveUpRecord(Project, id);

            return NextResponse.json({
                success: true,
                message: "Project moved up"
            });
        }

        // MOVE DOWN
        if (vote === "down") {
            await moveDownRecord(Project, id);

            return NextResponse.json({
                success: true,
                message: "Project moved down"
            });
        }

        // NORMAL UPDATE
        const data = await request.json();

        const updatedProject = await updateRecord(
            Project,
            id,
            data
        );

        if (!updatedProject) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedProject);

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
            return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
        }
        const deletedProject = await deleteRecord(Project, id);
        if (!deletedProject) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Project deleted successfully', deletedProject });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
