<template>
  <div>
    <h1>异常</h1>
    <p>错误码：{{ props.error.statusCode }}</p>
    <p>错误信息：{{ props.error.message }}</p>
    <button @click="handleGoHome">回到首页</button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

const handleGoHome = () => {
  clearError({ redirect: '/homepage' });
};
</script>
