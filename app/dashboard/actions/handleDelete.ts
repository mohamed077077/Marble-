
export async function handleDelete(id: string, activeTab: string, refetch: () => void ,setDeleting: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
        setDeleting(true);
        const response = await fetch(`/api/${activeTab}?id=${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete");

        refetch();
    } catch (error) {
        console.error("Error deleting:", error);
    } finally {
        setDeleting(false);
    }
}