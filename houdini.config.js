/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    watchSchema: {
        url: 'http://127.0.0.1:44321/graphql/v1',
    },
    plugins: {
        'houdini-svelte': {
            client: './src/houdiniClient.ts',
        },
    },
    scalars: {
        UUID: {
            type: 'string',
        },
        BigInt: {
            type: 'number',
        },
        Datetime: {
            type: 'Date',
            unmarshal(val) {
                return new Date(val);
            },
            marshal(date) {
                return date.getTime();
            },
        },
    },
};

export default config;
