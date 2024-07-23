import { useTokenStore } from '~/store/useTokenStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const noLoginRequiredPages = ['/login', '/register'];
  // 无需登录即可访问的页面
  if (noLoginRequiredPages.includes(to.path)) {
    return true;
  }
  const { token } = useTokenStore();
  console.log('🚀 ~ file: myRouteGuard.global.ts:10 ~ defineNuxtRouteMiddleware ~ token:', token);
  if (!token) {
    return navigateTo('/login');
  }
});
