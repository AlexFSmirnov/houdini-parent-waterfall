export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const log = (message: string, nestedLevel: number = 0) => {
    const now = new Date().toISOString();
    const prefix = '  '.repeat(nestedLevel);
    console.log(`${now} ${prefix}${message}`)
}
