export function buildRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g //detecta parâmetros
    //Substitui :id por uma regex com nome
    const pathWhithParams = path.replaceAll(routeParametersRegex,'(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWhithParams}`)//Cria a Regex final

    return pathRegex


    //return new RegExp()

}