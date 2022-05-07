import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "en-US",
  title: 'MyBlog',
  description: 'Just playing around.',
  themeConfig: {
    docsDir: '/',
    nav: [
      {
        text: "🏡Home",
        link: "/",
      },
      {
        text: "🔖Tags",
        link: "/tags",
      },
      {
        text: "📃Archives",
        link: "/archives",
      },
    ]
  },
})