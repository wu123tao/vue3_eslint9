# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# eslint9
暂时完成

```json
{
    "@eslint/js": "^9.22.0",
    "@stylistic/eslint-plugin-js": "^4.2.0",
    "eslint": "^9.22.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.3",
    "eslint-plugin-vue": "^10.0.0",
    "globals": "^16.0.0",
    "prettier": "^3.5.3",
    "typescript-eslint": "^8.26.1",
    "unplugin-auto-import": "^19.1.1",
    "vite-plugin-eslint": "^1.8.1",
    "vue-eslint-parser": "^10.1.1"
}
```

# vite自定义插件

根据vue-router中 `component: () => import('xxxxx')` 的 `xxxxx` 自动在 `views` 文件夹中生成模版文件

# TailwindCSS 