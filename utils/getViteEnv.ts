export const getViteEnv = () => {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.NUXT_ENV as 'dev' | 'test' | 'prod';
};
