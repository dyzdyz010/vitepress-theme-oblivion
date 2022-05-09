import Layout from './layouts/Layout.vue'

import './style/tailwind.postcss'
import './style/custom.scss'

export default {
    Layout,
    NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData` is a `ref` of current site-level metadata.
        // app.component('About', About)
    }
}