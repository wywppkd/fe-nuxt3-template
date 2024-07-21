export default defineNuxtRouteMiddleware((to, from) => {
  let whiteList = ["/login", "/register"];
  if (whiteList.includes(to.path)) {
    return true
  }
  let token: null | string = "";
  // 只有在客户端才能使用 localStorage
  if (!import.meta.server) {
    token = localStorage.getItem("token");
    if (!token) {
      return navigateTo("/login");
    }
  }
});
