const Mock = require('mockjs');
const Random = Mock.Random;
const swiperData = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 2,
      imageUrl: Random.image('375x200'),
    },
  ],
});

const goodListData = Mock.mock({
  'list|20': [
    {
      'id|+1': 2,
      imageUrl: Random.image('100x50'),
      'title|1-5': 'iPhone7',
      'desc|3-7': '很好的手机',
      'price|+10': 2,
    },
  ],
});

Mock.mock('/home/swiper', /get/, swiperData);
Mock.mock('/good/list', /get/, goodListData);
