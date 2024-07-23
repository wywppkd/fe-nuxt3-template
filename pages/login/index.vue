<template>
  <button @click="handleLogin">登录</button>
</template>
<script setup lang="ts">
import { useTokenStore } from '@/store/useTokenStore';
definePageMeta({
  layout: false,
});
const { setToken } = useTokenStore();

const handleLogin = () => {
  setToken(Date.now().toString());
  navigateTo('/');
};
</script>
<style lang="scss" scoped></style>
