import Layout from './layouts/Layout.vue'

export default {
    Layout,
    NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData` is a `ref` of current site-level metadata.
    }
}