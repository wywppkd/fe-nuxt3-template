<template>
  <div>
    <div @click="count++">hello {{ count }}</div>
    <div class="lg">token: {{ token }}</div>
    <div class="text-lg bg-white text-red-700">123</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getUserInfo } from '@/api/user';
import { useTokenStore } from '@/store/useTokenStore';
const token = useTokenStore().token;

const count = ref(0);

// 服务端加载
const res = await getUserInfo();
console.log('🚀 ~ file: index.vue:14 ~ res:', res);

const viteEnv = getViteEnv();
console.log('🚀 ~ file: index.vue:31 ~ onMounted ~ viteEnv:', viteEnv);

// 客户端加载
onMounted(async () => {
  const res = await getUserInfo();
  console.log('🚀 ~ file: index.vue:19 ~ onMounted ~ res:', res);
});
</script>

<style lang="scss" scoped></style>
