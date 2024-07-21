<template>
  <div  @click="count++">hello {{count}}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {getUserInfo} from "@/api/user"
const count = ref(0)

// 服务端加载
const res = await getUserInfo()
console.log("🚀 ~ file: index.vue:14 ~ res:", res)

// 客户端加载
onMounted(async () => {
  const res = await getUserInfo()
  console.log("🚀 ~ file: index.vue:16 ~ onMounted ~ res:", res)
})  
</script>
<style lang="scss" scoped>

</style>