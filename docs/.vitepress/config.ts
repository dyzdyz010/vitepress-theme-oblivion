import { defineConfig } from "vitepress"
import { getPosts, getPostLength } from "./theme/helpers/posts.ts";

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
    ],
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/tea.svg",
      docsDir: "/",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 5, //几个为一页
      postLength: await getPostLength(), //博客有几篇

      //       algolia: {
      //         apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
      //         indexName: "clark-cui-docs",
      //       },

      nav: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Tags",
          link: "/tags",
        },
        {
          text: "Archives",
          link: "/archives",
        },
      ],

      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      sidebar: false,
    },
  };
}
export default config();