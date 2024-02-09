import { graphql, load_DefaultThirdLayoutQuery } from '$houdini';
import { delay, log } from '$lib';


// The filter is added s.t. the result is not cached with other examples
export const _query = graphql(`
    query DefaultThirdLayoutQuery {
        third_tableCollection(
            filter: { name: { neq: "default" } }
        ) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)

export const load = async (event) => {
    log('[ ] default/second/third/+layout.ts started', 2)

    // Artificial delay to simulate network latency
    const result = await load_DefaultThirdLayoutQuery({ event });
    await delay(1000);

    log('[x] default/second/third/+layout.ts finished', 2)

    return {
        ...result,
    };
}