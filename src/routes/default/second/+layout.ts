import { graphql, load_DefaultSecondLayoutQuery } from '$houdini';
import { delay, log } from '$lib';


// The filter is added s.t. the result is not cached with other examples
export const _query = graphql(`
    query DefaultSecondLayoutQuery {
        second_tableCollection(
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
    log('[ ] default/second/+layout.ts started', 1)

    // Artificial delay to simulate network latency
    const result = await load_DefaultSecondLayoutQuery({ event });
    await delay(1000);

    log('[x] default/second/+layout.ts finished', 1)

    return {
        ...result,
    };
}