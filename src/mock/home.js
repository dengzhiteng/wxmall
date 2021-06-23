const Mock = require('mockjs');
const swiperData = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 2,
    },
  ],
});

Mock.mock('/home/swiper', /get/, swiperData);
