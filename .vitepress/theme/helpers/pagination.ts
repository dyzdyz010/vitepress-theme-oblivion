import { useData } from 'vitepress'

export function getStoragePage() {
    const path = window.location.hash ? window.location.pathname + window.location.hash : window.location.pathname
    const currentPage = JSON.parse(sessionStorage.getItem('currentPage'))

    if (currentPage === null || path !== currentPage.path) {
      sessionStorage.setItem('currentPage', JSON.stringify({ page: 1, path: window.location.hash ? window.location.pathname + window.location.hash : window.location.pathname }))
      return 1
    }

    return parseInt(currentPage.page)
}

export function setStoragePage(page) {
    const path = window.location.hash ? window.location.pathname + window.location.hash : window.location.pathname
    sessionStorage.setItem('currentPage', JSON.stringify({ page, path }))
}

export function getPostsOnPage(posts, page) {
    const pageSize = useData().theme.value.pageSize

    const before = (page - 1) * pageSize
    return posts.slice(before, before + pageSize)
}