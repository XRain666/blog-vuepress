import { defineConfig } from 'vitepress'
import AutoNav from 'vite-plugin-vitepress-auto-nav'

export default defineConfig({
  title: 'Xavi的技术文档',
  description: '个人前端技术文档',
  lang: 'zh-cmn-Hans',
  base: '/XaviDocs/',
  // 忽略解析部分md文件（默认忽略node_modules），仅打包后生效，被忽略的文件不影响被其他文件导入
  srcExclude: ['**/(README|TODO).md', '(.vitepress|public|images|.guthub|components|snippets)/**/*.md'],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    defaultHighlightLang: 'js',
  },
  vite: {
    plugins: [
      AutoNav({
        settings: {
          前端系列: { sort: 9 },
          VitePress搭建: { sort: 9 },
          源码阅读: { sort: 9 },
          日常记录: { sort: 8 },
          Vuex源码解析: { hide: true },
          Vue静态资源处理: { hide: true },
          基础搭建: { sort: 9 },
          进阶语法: { sort: 8 },
          配置解析: { sort: 7 },
        },
      }),
    ],
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: 'deep',
    outlineTitle: '目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Xaviw/XaviDocs' }],
    editLink: {
      pattern: 'https://github.com/Xaviw/XaviDocs/edit/master/:path',
      text: '修改本文',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',
    lastUpdatedText: '更新时间',
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
            footer: {
              closeText: '关闭',
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
})
