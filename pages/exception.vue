<template>
  <div>
    <h1>异常</h1>
    <p>错误码：{{ query?.statusCode }}</p>
    <p>错误信息：{{ query?.message }}</p>
    <button @click="handleGoHome">回到首页</button>
  </div>
</template>
<script setup lang="ts">
const { query } = useRoute();

const handleGoHome = () => {
  navigateTo('/');
};
</script>
