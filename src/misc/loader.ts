const script = async(src: string, callback: () => void, async = true, attributes: Record<string, string> = {}): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;

        for (const [key, value] of Object.entries(attributes)) {
            script.setAttribute(key, value);
        }

        script.onload = () => {
            if (callback) callback();
            resolve();
        };
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
    });
}
export default script;