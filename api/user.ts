export const getUserInfo = async (): Promise<{ code: number; data: any }> => {
  return request('/user/getInfo', {
    method: 'GET',
  });
};
