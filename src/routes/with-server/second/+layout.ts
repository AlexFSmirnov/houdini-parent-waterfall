import { graphql, load_WithServerSecondLayoutQuery } from '$houdini';
import { delay, log } from '$lib';


// The filter is added s.t. the result is not cached with other examples
export const _query = graphql(`
    query WithServerSecondLayoutQuery {
        second_tableCollection(
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
    log('[ ] default/second/+layout.ts started', 1)

    // Artificial delay to simulate network latency
    const result = await load_WithServerSecondLayoutQuery({ event });
    await delay(1000);

    log('[x] default/second/+layout.ts finished', 1)

    return {
        ...result,
    };
}