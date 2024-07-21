<template>
  <div>
    <h1>请求异常</h1>
    <p>错误码：{{code}}</p>
    <p>错误信息：{{message}}</p>
  </div>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'
const {query} = useRoute()
const {code='', message=''} = (query || {}) as any
</script>