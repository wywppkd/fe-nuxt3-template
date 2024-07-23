// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/global.scss" as *;',
        },
      },
    },
  },
  build: {
    // transpile: 'pinia-plugin-persistedstate',
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
});
