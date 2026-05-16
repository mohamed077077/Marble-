import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { Tab } from "../page";

interface HandleSubmitArgs {
    title: string;
    imageFile: File | null;
    category: 'projects' | 'products' | 'materials';
    setIsSubmitting: (value: boolean) => void;
    setError: (error: { title?: string; image?: string; fetch?: string }) => void;
    setActiveTab: (tab: Tab) => void;
}

export const handleSubmitAction = async ({
    title,
    imageFile,
    category,
    setIsSubmitting,
    setError,
    setActiveTab,
}: HandleSubmitArgs) => {
    setIsSubmitting(true);
    setError({});

    if (!title.trim()) {
        setError({ title: "Title is required" });
        setIsSubmitting(false);
        return;
    }

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
                title: title.trim(),
                imageUrl: imageUrl,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to create record");
        }

        setIsSubmitting(false);
        setError({});
        setActiveTab(category);
    } catch (error) {
        console.error("Error creating record:", error);
        setError({ fetch: "Error creating project" });
        setIsSubmitting(false);
    }
};
