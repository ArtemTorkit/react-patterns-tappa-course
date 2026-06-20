const useClipboard = (): { copyToClipboard: (text: string) => void } => {

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error('Failed to copy text to clipboard:', error);
        }
    };

    return { copyToClipboard };
}

export default useClipboard;