// axoios具体用法
// 官网地址：https://axios-http.com/zh/docs/intro
const axios = require("axios"); //引入axios模块

//axios 发起get请求的两种方式
// 方法一：传入一个url字符串
axios.get("https://movie.douban.com/j/search_tags?type=tv&source=index")
  .then((res) => {
    console.log(res);
  }).catch((error) => {
  console.log(error);
})
// 方法二：传入一个对象,注意对象必须用{}包裹
let params = {
  type: "tv",
  source: "index"

}
axios.get("https://movie.douban.com/j/search_tags", {params})
  .then((res) => {
    console.log(res);
  }).catch((error) => {
  console.log(error);
})

// 支持 aysnc await 用法
async function getTags() {
  try {
    let res = await axios.get("https://movie.douban.com/j/search_tags?type=tv&source=index");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

//axios 发起post请求
// 单个请求
let data = {type: "tv", source: "index"}
axios.post("https://movie.douban.com/j/search_tags", data)
  .then((res) => {
    console.log(res);
  }).catch((error) => {
  console.log(error);
})

// 并发请求
axios.all([
  axios.get("https://movie.douban.com/j/search_tags?type=tv&source=index"),
  axios.get("https://movie.douban.com/j/search_tags?type=tv&source=index")
]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
})).catch((error) => {
  console.log(error);
})

// axios的配置
// 1.全局配置
axios.defaults.baseURL = "https://movie.douban.com/j/search_tags";
axios.defaults.timeout = 1000;
// 2.axios.create()创建实例
const instance = axios.create({
  baseURL: "https://movie.douban.com/j/search_tags",
  timeout: 1000
})

// 3.请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
//4.响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 5.取消请求
axios.CancelToken.source();

