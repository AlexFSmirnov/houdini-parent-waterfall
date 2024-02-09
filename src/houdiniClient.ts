import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'http://127.0.0.1:44321/graphql/v1',

    fetchParams: ({ session }) => {
        return {
            headers: {
                Authorization: `Bearer ${session?.access_token}`,
            },
        };
    },
});
