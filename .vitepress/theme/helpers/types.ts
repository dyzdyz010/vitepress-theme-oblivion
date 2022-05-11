type SideBarItem = SideBarLink | SideBarGroup

interface SideBarLink {
    text: string
    link: string
}

interface SideBarGroup {
    text: string
    link?: string

    /**
     * @default false
     */
    collapsable?: boolean

    children: SideBarItem[]
}
