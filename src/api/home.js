import request from '@/utils/request';

export const getHomeSwiper = () => {
  return request({
    url: '/home/swiper',
  });
};
export const getGoodList = () => {
  return request({
    url: '/good/list',
  });
};
