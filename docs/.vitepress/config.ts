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
      { text: '介绍', link: '/introduction' },
      { text: '官网', link: 'https://paper-card.cn' },
    ],

    sidebar:
      [
        {
          text: '🕹️介绍',
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
          text: '快速加入',
          link: "/faq/join"
        },

        {
          text: '🧭指令大全',
          link: "/commands"
        },

        {
          text: '封禁、解封与举报',
          link: '/ban/'
        },

        {
          text: '可用与不可用模组',
          link: "/mods"
        },


        {
          text: '🔋电池',
          link: "/coins"
        },

        {
          text: '常见问题',
          collapsed: true,
          link: "/faq/",
          items: []
        },

        {
          text: '支持与赞助',
          link: "/support-us/",
          collapsed: true,
          items: [
            {
              text: '微信或支付宝',
              link: "/support-us/"
            },
            {
              text: '爱发电',
              link: "/support-us/afdian"
            },
            {
              text: "网站开发维护",
              link: "/support-us/docs"
            }
          ]
        },


        {
          text: '社团',
          collapsed: true,
          link: "/clubs/",
          items: [
            { text: '动漫社', link: "/clubs/DMS" },
            { text: '莱文市', link: "/clubs/LWS" },
            { text: '苏维埃', link: "/clubs/SWA" },
            { text: '芋泥蛋糕', link: "/clubs/YNDG" },
            { text: '璃虹港', link: "/clubs/LHG" },
            { text: '约翰山庄', link: "/clubs/YHSZ" },
            { text: '小樱花山', link: "/clubs/XYHS" },
            { text: '南植重工基地', link: "/clubs/NZZGJD" },
          ]
        },

        {
          text: '插件',
          collapsed: true,
          link: "/plugins/",
          items: [
            { text: '漂流瓶', link: "/plugins/drift-bottle" },
            { text: '酿酒', link: "/plugins/brewing" },
            { text: '盔甲架自定义', link: "/plugins/armor-stand" },
            { text: 'PaperPVP', link: "/plugins/paper-pvp" },
          ]
        },

        {
          text: '更新日志',
          collapsed: true,
          link: "/logs/",
          items: []
        },

        {
          text: '公告',
          collapsed: true,
          link: "/announcements/",
          items: []
        },

        {
          text: '未来计划',
          link: "/future/"
        },

      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pan90/new-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/pan90/new-docs/tree/main/:path',
      text: '编辑'
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
