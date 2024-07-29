import { options } from '#build/eslint.config.mjs';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['normalize.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/global.scss" as *;',
        },
      },
    },
  },
  build: {},
  modules: [
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-proxy',
  ],
  elementPlus: {
    // 配置项: https://nuxt.com/modules/element-plus#options
  },
  eslint: {
    // options here
    config: {
      // stylistic: true // 改用 prettier 统一风格
    },
  },
  runtimeConfig: {
    public: {
      NUXT_ENV: process.env.NUXT_ENV,
      NUXT_PUBLIC_API_URL: process.env.NUXT_PUBLIC_API_URL,
    },
    // 线上服务代理配置(nuxt-proxy 配置)
    proxy: {
      options: [
        {
          target: process.env.NUXT_PUBLIC_API_URL,
          changeOrigin: true,
          pathRewrite: {
            '^/api/': '/',
          },
          pathFilter: ['/api/'], // 匹配规则
        },
      ],
    },
  },
  nitro: {
    // 本地开发代理配置
    devProxy: {
      '/api/': {
        target: process.env.NUXT_PUBLIC_API_URL,
        changeOrigin: true,
        prependPath: true, // 相当于 rewrite 去掉 /api
      },
    },
  },
});
