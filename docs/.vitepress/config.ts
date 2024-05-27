import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PaperCard文档",
  description: "纸片PaperCard服务器详细文档",
  lang: 'zh-CN',
  // cleanUrls: true,
  // metaChunk: true,
  lastUpdated: true,
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

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
      { text: '帮助目录📑', link: '/introduction' },
    ],

    sidebar:
      [
        {
          text: '玩法与介绍',
          link: "/introduction"
        },

        {
          text: '前言',
          link: "/preface"
        },

        {
          text: '玩家筛选',
          link: "/filter-players"
        },

        {
          text: '玩家守则',
          link: "/rules"
        },

        {
          text: '加入服务器',
          link: "/join"
        },

        {
          text: '如何使用纸片正版登录',
          link: "/papercardlogin"
        },

        {
          text: '玩家指令大全',
          link: "/player-commands"
        },

        {
          text: '封禁、解封与举报',
          link: '/ban'
        },

        {
          text: '可用与不可用模组',
          link: "/mods"
        },

        {
          text: '可能遇到的问题',
          link: "/problem"
        },

        {
          text: '支持与赞助',
          link: "/zanzhu"
        },

        {
          text: '电池指南',
          link: "/coins"
        },

        {
          text: '社团',
          collapsed: true,
          items: [
            { text: '索引', link: "/clubs/" },
            { text: '动漫社', link: "/clubs/DMS" },
            { text: '莱文市', link: "/clubs/LWS" },
            { text: '苏维埃', link: "/clubs/SWA" },
            { text: '芋泥蛋糕', link: "/clubs/YNDG" },
            { text: '璃虹港', link: "/clubs/LHG" },
            { text: '约翰山庄', link: "/clubs/YHSZ" },
            { text: '小樱花山', link: "/clubs/XYHS" },
          ]
        },

        {
          text: '插件',
          collapsed: true,
          items: [
            { text: '索引', link: "/plugins/" },
            { text: '漂流瓶', link: "/plugins/drift-bottle" },
            { text: '酿酒', link: "/plugins/brewing" },
            { text: '盔甲架自定义', link: "/plugins/armor-stand" },
            { text: 'PaperPVP', link: "/plugins/paper-pvp" },
          ]
        },

        {
          text: '更新日志',
          link: "/logs/"
        },

        {
          text: '公告',
          link: "/announcements/"
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
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '页面导航' // 文字显示
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
