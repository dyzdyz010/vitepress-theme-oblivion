import { useData } from 'vitepress'

export function getStoragePage() {
    const path = window.location.pathname
    const currentPage = JSON.parse(sessionStorage.getItem('currentPage'))

    if (currentPage === null || path !== currentPage.path) {
      sessionStorage.setItem('currentPage', JSON.stringify({ page: 1, path: '' }))
      return 1
    }

    return parseInt(currentPage.page)
}

export function setStoragePage(page) {
    const path = window.location.pathname
    sessionStorage.setItem('currentPage', JSON.stringify({ page, path }))
}

export function getPostsOnPage(page) {
    const posts = useData().theme.value.posts
    const pageSize = useData().theme.value.pageSize

    const before = (page - 1) * pageSize
    return posts.slice(before, before + pageSize)
}