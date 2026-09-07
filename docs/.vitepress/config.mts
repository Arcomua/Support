import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: 'Arcomua Help Center',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: 'Arcomua Modpack 的安装、使用与常见问题帮助文档。',
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans'
    },
    en: {
      label: 'English (US)',
      lang: 'en-US',
      link: '/en/',
      title: 'Arcomua Help Center',
      description: 'Installation, usage, and troubleshooting documentation for Arcomua Modpack.',
      themeConfig: {
        siteTitle: 'Arcomua Help Center',
        nav: [
          { text: 'Home', link: 'https://www.arcomua.com/' },
          { text: 'Downloads', link: 'https://dl.arcomua.com/' },
          { text: 'Help', link: '/en/' },
          {
            text: 'Modpacks',
            items: [
              { text: 'Arcomua Cloth', link: '/en/pack/a-cloth' },
              { text: 'Arcomua Anvil', link: '/en/pack/a-anvil' },
              { text: 'Arcomua Lite', link: '/en/pack/a-lite' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/en/guide/start' },
              { text: 'How to Submit Feedback', link: '/en/guide/feedback' },
              { text: 'Troubleshooting', link: '/en/guide/qa' }
            ]
          },
          {
            text: 'Modpacks',
            items: [
              { text: 'Arcomua Cloth', link: '/en/pack/a-cloth' },
              { text: 'Arcomua Anvil', link: '/en/pack/a-anvil' },
              { text: 'Arcomua Lite', link: '/en/pack/a-lite' }
            ]
          },
          {
            text: 'Installation',
            items: [
              { text: 'Introduction', link: '/en/install/introduction' },
              { text: 'Install with HMCL', link: '/en/install/hmcl' },
              { text: 'Install with PCL2', link: '/en/install/pcl2' },
              { text: 'Install with BakaXL', link: '/en/install/bakaxl' },
              { text: 'Install with PCL2 Community Edition (WIP)', link: '/en/install/pcl2-ce' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change language',
        skipToContentLabel: 'Skip to content',
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        editLink: {
          pattern: 'https://github.com/Arcomua/Support/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Published under the CC BY-NC-SA 4.0 license',
          copyright: `Copyright © 2020-${currentYear} Arcomua Team`
        },
        notFound: {
          title: 'Page not found',
          quote: 'The page you requested does not exist or has moved.',
          linkLabel: 'Go to the home page',
          linkText: 'Back to home'
        }
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', alt: 'Arcomua' },
    siteTitle: 'Arcomua 帮助中心',
    nav: [
      { text: '主页', link: 'https://www.arcomua.com/' },
      { text: '下载', link: 'https://dl.arcomua.com/' },
      { text: '帮助', link: '/' },
      {
        text: '整合包',
        items: [
          { text: 'Arcomua Cloth', link: '/pack/a-cloth' },
          { text: 'Arcomua Anvil', link: '/pack/a-anvil' },
          { text: 'Arcomua Lite', link: '/pack/a-lite' }
        ]
      }
    ],
    search: {
      provider:'local',
      options:{
        locales:{
          root:{
            translations:{
              button:{
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                displayDetails: 'Display detailed results',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found',
                footer: {
                  selectText: 'Select',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Navigate',
                  navigateUpKeyAriaLabel: 'Arrow up',
                  navigateDownKeyAriaLabel: 'Arrow down',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '快速开始', link: '/guide/start' },
          { text: '如何反馈', link: '/guide/feedback' },
          { text: '疑难解答', link: '/guide/qa' }
        ]
      },
      {
        text: '整合包',
        items: [
          { text: 'Arcomua Cloth', link: '/pack/a-cloth' },
          { text: 'Arcomua Anvil', link: '/pack/a-anvil' },
          { text: 'Arcomua Lite', link: '/pack/a-lite' }
        ]
      },
      {
        text: '安装',
        items: [
          { text: '引言', link: '/install/introduction' },
          { text: '使用 HMCL 安装', link: '/install/hmcl' },
          { text: '使用 PCL2 安装', link: '/install/pcl2'},
          { text: '使用 BakaXL 安装', link: '/install/bakaxl'},
          { text: '使用 PCL2 社区版安装（编写中）', link: '/install/pcl2-ce'}
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳转到正文',
    externalLinkIcon: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Arcomua', ariaLabel: 'Arcomua on GitHub' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Modrinth</title><path fill="#00d845" d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"/></svg>'
        },
        link: 'https://modrinth.com/organization/arcomua-team',
        ariaLabel: 'Arcomua on Modrinth'
      }
    ],
    lastUpdated: {
      text: '最后一次更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/Arcomua/Support/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '基于 CC BY-NC-SA 4.0 许可发布',
      copyright: `版权所有 © 2020-${currentYear} Arcomua Team`
    },
    notFound: {
      title: '页面未找到',
      quote: '该页面不存在或已被移动。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    }
  }
})
