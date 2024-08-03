<template>
  <div>
    <header
      class="relative h-[200px] bg-[url(https://fastly.picsum.photos/id/959/375/200.jpg?hmac=4R4JjtKeK7eK4Qk7Au31pUuP4Aoq6-WPfzbAAM_my4k)] px-5 pt-4"
    >
      <!-- logo -->
      <div class="flex items-center justify-between">
        <img
          class="h-5"
          src="https://fastly.picsum.photos/id/585/137/20.jpg?hmac=NZ43PotD86q-o6nQH_7kDIx_89zFGamZ-pbWleEUVg0"
          alt=""
        />
        <div class="size-5">
          <img
            src="https://fastly.picsum.photos/id/533/20/20.jpg?hmac=QRjNXbac4L2vjYwxW9DDXX5qj_jF7Dof504Co9c2UNo"
            alt=""
          />
        </div>
      </div>
      <!-- 标题 -->
      <div class="absolute bottom-[52px] text-2xl font-semibold text-white">首页</div>
      <div class="absolute bottom-[30px] text-xs text-white">1231231</div>
    </header>
    <main class="mx-auto w-[calc(100%-theme(spacing.10))] pt-7">
      <h2
        class="text-black-500 text-xl after:mt-2 after:block after:h-1 after:w-[2em] after:bg-red-500"
      >
        飞飞APP
      </h2>
      <h3 class="mt-5 text-sm text-red-500">空中滴滴，按需出行</h3>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
