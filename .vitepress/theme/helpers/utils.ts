export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/


export function isActive(route: Route, path?: string): boolean {
    if (path === undefined) {
        return false
    }
  
    const routePath = normalize(`/${route.data.relativePath}`)
    const pagePath = normalize(path)
  
    return routePath === pagePath
  }
  
  export function normalize(path: string): string {
    return decodeURI(path).replace(hashRE, '').replace(extRE, '')
  }
  