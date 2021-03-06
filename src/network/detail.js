import { request } from './request'
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 商品推荐数据
export function GetRecommendData() {
  return request({
    url: '/recommend'
  })
}

// 将所有详情的数据封装为一个类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
//店铺信息
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}
// 商品详情
export class GoodsParams {
  constructor(info, rule) {
    this.image = info.image ? info.image[0] : 0
    this.infos = info.set
    this.sizes = rule.tables
  }
}