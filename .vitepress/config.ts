import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PaperCard文档",
  description: "纸片PaperCard服务器详细文档",
  lang: 'zh-CN',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {

    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://paper-card.cn' },
      { text: '文档', link: '/player-commands' }
    ],

    sidebar: [
      {
        text: '玩家指令大全',
        link: "/player-commands"
      },

      {
        text: '参与编写',
        link: "/contribute"
      }


    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pan90/new-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/pan90/new-docs/tree/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
