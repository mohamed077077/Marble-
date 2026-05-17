import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { Tab } from "../page";

interface HandleSubmitArgs {
    title?: string;
    imageFile: File | null;
    category: 'projects' | 'products' | 'materials';
    type?: 'granite' | 'marble' | 'natural-stone' | 'other';
    setIsSubmitting: (value: boolean) => void;
    setError: (error: { title?: string; image?: string; fetch?: string }) => void;
    setActiveTab: (tab: Tab) => void;
}

export const handleSubmitAction = async ({
    title,
    imageFile,
    category,
    type,
    setIsSubmitting,
    setError,
    setActiveTab,
}: HandleSubmitArgs) => {
    setIsSubmitting(true);
    setError({});



    if (!imageFile) {
        setError({ image: "Image is required" });
        setIsSubmitting(false);
        return;
    }

    let imageUrl: string;
    try {
        imageUrl = await uploadImageToCloudinary(imageFile);
    } catch (error) {
        console.error("Error uploading image:", error);
        setError({ image: "Error uploading image" });
        setIsSubmitting(false);
        return;
    }

    try {
        const endpoint = category === 'projects'
            ? '/api/projects'
            : category === 'products'
                ? '/api/products'
                : '/api/materials';

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title?.trim(),
                imageUrl: imageUrl,
                type: type,
            }),
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || "Failed to create record");
        }

        setIsSubmitting(false);
        setError({});
        setActiveTab(category);
    } catch (error: any) {
        console.error("Error creating record:", error);
        setError({ fetch: error.message || "Error creating record" });
        setIsSubmitting(false);
    }
};
