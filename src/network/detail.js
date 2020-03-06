import axios from './axios'

export function getDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getReCommend() {
  return axios({
    url: '/recommend',
  })
}

export class BaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

/* export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl;
  }
}
 */

/* export class ParamsInfo {
  constructor(info, rule) {
    // 判断是否有图片
    this.image = info.images ? info.images[0] : '';
    this.param = info.set;
    this.sizes = rule.tables
  }
} */
