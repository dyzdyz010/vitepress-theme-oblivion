import Layout from './layouts/Layout.vue'
import Tags from './components/Tags.vue'
import Collections from './components/Collections.vue'

import './styles/tailwind.postcss'
import './styles/custom.scss'

export default {
    Layout,
    NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
        app.component('Tags', Tags)
        app.component('Collections', Collections)
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData` is a `ref` of current site-level metadata.
        // app.component('About', About)
    }
}