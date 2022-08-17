// .vuepress/config.js
module.exports = {
  base: "/iori/",
  // head: [["meta", { name: "theme-color", content: "#3eaf7c" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "IORI计时器",
      description: "A timer that children can use, a good helper for the coach",
    },
    "/en/": {
      lang: "en-US",
      title: "IORI Timer",
      description: "",
    },
  },
  themeConfig: {
    // logo: "/logo.jpg",
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        lastUpdated: "最后更新",
        nav: [
          { text: "主页", link: "/" },
          { text: "指南", link: "/guide/" },
          {
            text: "视频合集",
            link: "https://www.bilibili.com/video/BV1ZN4y1G7u7",
          },
        ],
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/guide/" },
          // {
          //   text: "视频合集",
          //   link: "https://www.bilibili.com/video/BV1ZN4y1G7u7",
          // },
        ],
        repo: "zuqiuxunlian/iori-docs",
        repoLabel: "Github",
        editLinks: true,
        editLinkText: "Edit this page on GitHub",
      },
    },
    sidebar: "auto",
    smoothScroll: true,
    lastUpdated: "Last Updated", // string | boolean
    repo: "zuqiuxunlian/iori-docs",
    // repoLabel: "查看源码",
    // editLinks: true,
    // editLinkText: "帮助我们改善此页面！",
  },
  plugins: [
    [
      "vuepress-plugin-baidu-tongji-analytics",
      {
        key: "86b7ffbe3429f402fed4ed377ecdfcad",
        dev: false,
      },
    ],
  ],
};
