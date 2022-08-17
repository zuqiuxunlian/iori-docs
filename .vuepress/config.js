// .vuepress/config.js
module.exports = {
  title: "IORI计时器",
  description: "小孩子都会用的计时器，教练的好帮手",
  base: "/iori/",
  themeConfig: {
    // logo: "/logo.jpg",
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "视频合集", link: "https://www.bilibili.com/video/BV1ZN4y1G7u7" },
    ],
    sidebar: "auto",
    smoothScroll: true,
    lastUpdated: "Last Updated", // string | boolean
    // repo: "zuqiuxunlian/iori-docs",
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
