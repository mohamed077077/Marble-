

export async function handleReorder(id: string, vote: 'up' | 'down' ,activeTab: string, refetch: () => void , setIsVoting: React.Dispatch<React.SetStateAction<boolean>>) {
    try{
        setIsVoting(true);
        const res = await fetch(`/api/${activeTab}?id=${id}&vote=${vote}`, {
            method: 'PATCH',
        });
        if (!res.ok) throw new Error('Failed to reorder');
        refetch();
    } catch (error) {
        console.error('Error reordering:', error);
    } finally {
        setIsVoting(false);
    }
}
