import request from '@/utils/request';

export const getHomeSwiper = () => {
  return request({
    url: '/home/swiper',
  });
};
