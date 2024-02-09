import { graphql, load_WithServerThirdPageQuery } from '$houdini';
import { delay, log } from '$lib';


// The filter is added s.t. the result is not cached with other examples
export const _query = graphql(`
    query WithServerThirdPageQuery {
        fourth_tableCollection(
            filter: { name: { neq: "WithServer" } }
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
    log('[ ] default/second/third/+page.ts started', 3)

    // Artificial delay to simulate network latency
    const result = await load_WithServerThirdPageQuery({ event });
    await delay(1000);

    log('[x] default/second/third/+page.ts finished', 3)

    return {
        ...result,
    };
}