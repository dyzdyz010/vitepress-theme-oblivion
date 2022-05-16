import { defineConfig } from "vitepress"
import { getPosts, getPostLength, getCollections, getTags } from "./theme/helpers/serverUtils.ts";

async function config() {
  return {
    lang: "en-US",
    title: "Wonderland",
    description: "Personal blog home",
    head: [
      [
        "meta",
        {
          name: "author",
          content: "dyzdyz010",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Personal blog home",
        },

      ],
      [
        'link',
        {
          rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css',
        }
      ],
    ],
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/blog_logo.png",
      docsDir: "/",
      author: "dyzdyz010",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(), // 文章总数
      pageSize: 6, //几个为一页
      postLength: await getPostLength(), //博客有几篇
      collections: await getCollections(),
      tags: await getTags(),

      //       algolia: {
      //         apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
      //         indexName: "clark-cui-docs",
      //       },

      nav: [
        {
          text: "Home",
          link: "/",
          icon: "home",
        },
        {
          text: "Tags",
          link: "/tags",
          icon: "tag",
        },
        {
          text: "Collections",
          link: "/collections",
          icon: "collection",
          sub: (await getCollections()).map(item => item.name),
        },
        {
          text: "About",
          link: "/about",
          icon: "question-mark-circle",
        },
      ],
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/dyzdyz010',
        },
        {
          name: 'Facebook',
          link: 'https://facebook.com',
        },
      ],
      sidebar: false,
    },
    markdown: {
      lineNumbers: false,
      config: (md) => {
        md.use(require('./theme/helpers/markdown-it-katex.ts'));
      },
    },
  }
}
export default config()