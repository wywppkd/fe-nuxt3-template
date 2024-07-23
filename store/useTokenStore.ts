import { defineStore } from 'pinia';

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref<string | undefined>(undefined);
    const setToken = (newToken: string) => {
      token.value = newToken;
    };
    return { token, setToken };
  },
  {
    persist: true,
  },
);
