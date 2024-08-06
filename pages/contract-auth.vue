<template>
  <div class="h-dvh bg-gray-100 pt-4">
    <div class="mx-auto w-[355px] divide-y rounded-lg bg-white pl-3">
      <div v-for="item of 2" :key="item" class="flex h-12 items-center active:bg-gray-200">
        <img
          src="https://fastly.picsum.photos/id/9/24/24.jpg?hmac=Xkyx-wWD8e8ye3WgDzpVz85-8NHlwnGNIW5Mu07cOhY"
          alt=""
        />
        <div class="ml-2">{{ item }}</div>
        <img
          class="ml-auto mr-3"
          src="https://fastly.picsum.photos/id/817/12/7.jpg?hmac=DybHsUhydPfV4k7F0mOO1bcTRJ31JHOwJ7bg4P4VnB4"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
