const Mock = require("mockjs");
const Random = Mock.Random;

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: "300-600",
});

const swiperData = Mock.mock({
  "list|1-10": [
    {
      "id|+1": 2,
      imageUrl: Random.image("375x200"),
    },
  ],
});

const goodListData = Mock.mock({
  "list|20": [
    {
      "id|+1": 2,
      imageUrl: Random.image("100x50"),
      "title|1-5": "iPhone7",
      "desc|3-7": "很好的手机",
      "price|+10": 2,
      "orginPrice|+5": 20,
    },
  ],
});

const detailsData = Mock.mock({
  "list|20": [
    {
      "id|+1": 2,
      imageUrl: Random.image("100x50"),
      "title|1-5": "iPhone7",
      "desc|7-10": "很好的手机",
      "price|+10": 2,
      "orginPrice|+5": 20,
    },
  ],
});

Mock.mock("/home/swiper", /get/, swiperData);
Mock.mock("/goods/list", /get/, goodListData);
Mock.mock("/goods/details", /get/, detailsData);
