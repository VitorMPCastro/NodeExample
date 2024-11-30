export const processAsyncData = async (input: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed Data: ${input}`);
        }, 2000);
    });
};
