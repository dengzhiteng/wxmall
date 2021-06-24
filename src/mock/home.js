const Mock = require('mockjs');
const Random = Mock.Random;
const swiperData = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 2,
      imageUrl: Random.image('375x300'),
    },
  ],
});

Mock.mock('/home/swiper', /get/, swiperData);
