import { SideBarItem } from './types.ts'

import { useRoute, useData } from 'vitepress'

export function getTOC(): SideBarItem[] {
    const route = useRoute()
    const headers = route.data.headers
    const depth = route.data.frontmatter.sidebarDepth

    const ret: SideBarItem[] = []

    if (headers === undefined) {
        return []
    }

    let lastH2: SideBarItem | undefined = undefined
    headers.forEach(({ level, title, slug }) => {
        if (level - 1 > depth) {
            return
        }

        const item: SideBarItem = {
            text: title,
            link: `#${slug}`
        }
        if (level === 2) {
            lastH2 = item
            ret.push(item)
        } else if (lastH2) {
            ; ((lastH2 as any).children || ((lastH2 as any).children = [])).push(item)
        }
    })

    return ret
}