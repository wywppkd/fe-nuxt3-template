import { useTokenStore } from '~/store/useTokenStore';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
} as Record<number, string>;

type Pararams = Parameters<typeof useFetch>;
export const request = async (url: Pararams[0], options: Pararams[1]): Promise<any> => {
  const nuxtApp = useNuxtApp();
  const { token } = useTokenStore();
  return new Promise((resolve, reject) => {
    useFetch(url, {
      baseURL: 'http://rap2api.taobao.org/app/mock/230933/staff/v1',
      onRequest({ request, options }) {
        if (token) {
          options.headers = {
            ...options.headers,
            Authorization: token,
          };
        }
      },
      onRequestError({ request, options, error }) {
        // 处理请求错误
      },
      onResponse({ request, options, response }) {
        // 响应拦截器(任何HTTP状态码)
        const { status } = response;
        const res = response._data;
        if (status >= 200 && status < 300) {
          const { code, errmsg } = res;
          // 登录失效
          if (code === 401) {
            nuxtApp.runWithContext(() => {
              navigateTo('/login');
            });
            return;
          }

          // 业务code码失败处理
          if (code !== 200) {
            if (import.meta.client) {
              ElMessage.error(`错误码：${code}，错误信息：${errmsg}`);
            } else {
              nuxtApp.runWithContext(() => {
                navigateTo({
                  path: '/exception',
                  query: {
                    statusCode: code,
                    message: errmsg,
                  },
                });
              });
            }
          }
        }
      },
      async onResponseError({ request, response, options }) {
        // 处理响应错误(非 2xx 状态码)
        const { status } = response;
        const errmsg = codeMessage[status] || '未知错误';
        await nuxtApp.runWithContext(() => {});

        if (import.meta.client) {
          ElMessage.error(`请求错误 ${status}：${errmsg}`);
        } else {
          await nuxtApp.runWithContext(() =>
            navigateTo({
              path: '/exception',
              query: {
                statusCode: status,
                message: errmsg,
              },
            }),
          );
        }
      },
      ...options,
    })
      .then((res) =>
        resolve(
          res.data.value, // 保证页面拿到业务数据
        ),
      )
      .catch(reject);
  });
};
