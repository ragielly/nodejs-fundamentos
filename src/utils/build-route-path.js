export function buildRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWhithParams = path.replaceAll(routeParametersRegex,'(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWhithParams}`)

    return pathRegex


    //return new RegExp()

}