<template>
  <button @click="handleLogin">登录</button>
</template>
<script setup lang="ts">
const handleLogin = () => {
  localStorage.setItem('token', '123')
  navigateTo('/')
}
</script>
<style lang="scss" scoped>
</style>