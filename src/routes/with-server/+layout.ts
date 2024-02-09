import { graphql, load_WithServerFirstLayoutQuery } from '$houdini';
import { delay, log } from '$lib';


// The filter is added s.t. the result is not cached with other examples
export const _query = graphql(`
    query WithServerFirstLayoutQuery {
        first_tableCollection(
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
    log('[ ] default/+layout.ts started', 0)

    // Artificial delay to simulate network latency
    const result = await load_WithServerFirstLayoutQuery({ event });
    await delay(1000);

    log('[x] default/+layout.ts finished', 0)

    return {
        ...result,
    };
}