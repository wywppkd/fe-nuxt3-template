# fe-nuxt3-template

- [x] 封装 useFetch(代替 axios), 统一处理请求错误, 以及请求头
- [x] 支持环境变量
- [x] 支持接口代理(线上 & 本地)
- [x] 通过中间件实现路由守卫
- [x] 引入 pinia, 支持持久化, 存储 token
- [x] 配置 eslint, prettier, husky, lint-staged
- [x] 引入全局样式文件
- [x] 引入 ellement-plus
- [x] 引入 normalize.css

```bash
pnpm install # 推荐使用 pnpm@9, 尝试用 yarn 会出现 eslint 不生效的问题

# 本地启动
pnpm run dev # 开发环境接口
pnpm run dev:test # 测试环境接口

# 构建
pnpm run build:dev # 开发环境接口
pnpm run build:test # 测试环境接口
pnpm run build:prod # 生产环境接口

# 部署
node .output/server/index.mjs # 启动服务, 或使用 pm2 管理服务
```
