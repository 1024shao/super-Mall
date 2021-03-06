import axios from 'axios'

export function request(config) {
  //创建axios实例对象
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //配置请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  //配置相应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}
