import { useData } from 'vitepress'

export function getStorageCollection() {
    const currentCollection = sessionStorage.getItem('currentCollection')

    if (currentCollection === null) {
      sessionStorage.setItem('currentCollection', '')
      return ''
    }

    return currentCollection
}

export function setStorageCollection(collection) {
    sessionStorage.setItem('currentCollection', collection)
}

export function getPostsByCollection(collection) {
    const posts = useData().theme.value.posts
    return (collection == '') ? posts : posts.filter((p) => p.frontMatter.collection && p.frontMatter.collection == collection)
}