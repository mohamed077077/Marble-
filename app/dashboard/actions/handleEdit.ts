import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";

interface HandleSubmitArgs {
    id : string;
    activeTab : string;
    submissionData : {
        title ?: string;
        image ?: File;
        type ?: 'granite' | 'marble' | 'natural-stone' | 'other';
    }
    setError: (error: { title?: string;  fetch?: string }) => void;
    handleClose: (e?: React.MouseEvent) => void;
    setIsSubmitting :React.Dispatch<React.SetStateAction<boolean>>;
    refetch: () => void;
}

export const handleEditAction = async ({
    id,
    activeTab,
    submissionData,
    setError,
    handleClose,
    setIsSubmitting,
    refetch,
}: HandleSubmitArgs) => {
    setError({});




let imageUrl: string = "";

    try {
        if (submissionData.image) {
            imageUrl = await uploadImageToCloudinary(submissionData.image);  
        }
    }catch(e){
        setError({ fetch: "Error uploading image" });
        setIsSubmitting(false);
        return;
    }

    try {
        const endpoint = activeTab === 'projects'
            ? `/api/projects?id=${id}`
            : activeTab === 'products'
                ? `/api/products?id=${id}`
                : `/api/materials?id=${id}`;

        let data: Record<string, unknown> = {};

        if (submissionData.title !== undefined) {
            data.title = submissionData.title.trim();
        }

        if (imageUrl !== "") {
            data.imageUrl = imageUrl;
        }

        if (submissionData.type) {
            data.type = submissionData.type;
        }

        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to update record");
        }

        setIsSubmitting(false);
        setError({});
        refetch();
        handleClose();
    } catch (error) {
        console.error("Error updating record:", error);
        setError({ fetch: "Error updating project" });
        setIsSubmitting(false);
    }
};
