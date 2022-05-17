import { useData } from 'vitepress'

export function getStorageTag() {
    const currentTag = sessionStorage.getItem('currentTag')

    if (currentTag === null) {
      sessionStorage.setItem('currentTag', '')
      return ''
    }

    return currentTag
}

export function setStorageTag(tag) {
    sessionStorage.setItem('currentTag', tag)
}

export function getPostsByTag(tag) {
    const posts = useData().theme.value.posts
    
    return (tag == '') ? posts : posts.filter((p) => p.frontMatter.tags.indexOf(tag) > -1)
}