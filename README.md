# Arcomua Help Center

Arcomua Modpack 的在线帮助文档，基于 VitePress 构建。

## 本地开发

建议使用 Node.js 22 或更高版本。

项目暂时保留稳定版 VitePress 1.6.4，并通过 npm overrides 使用带有安全修复的 Vite 6。

```sh
npm ci
npm run docs:dev
```

## 构建

```sh
npm run docs:build
npm run docs:preview
```

文档内容位于 `docs/`，站点配置位于 `docs/.vitepress/`。
