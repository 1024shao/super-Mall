// 所有对于首页的网路请求都封装于此
import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}