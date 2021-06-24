import request from "@/utils/request";

export const getHomeSwiper = () => {
  return request({
    url: "/home/swiper",
  });
};
export const getGoodList = () => {
  return request({
    url: "/goods/list",
  });
};

export const getDetails = ({ id }) => {
  return request({
    url: `/goods/details`,
    data: {
      id,
    },
  });
};
