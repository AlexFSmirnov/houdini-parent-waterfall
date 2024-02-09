export const load = async (event) => {
    return {
        __houdini__session__: event.locals.session || {},
    }
}