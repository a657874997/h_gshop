/*
* ajax请求函数
* 返回值：promise对象(异步返回的数据是：response.data)
* */
import Axios from 'axios'
export default function ajax(url, data={}, type='get') {
  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      let dataStr = '' //存储数据拼接参数
      Object.keys(data).forEach(key => {
        dataStr += key + '=' +data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = Axios.get(url)
    }else {
      //发送post请求
      promise = Axios.post(url,  data)
    }
    promise.then(function (response) {
      //成功调用resolve()
      resolve(response.data)
    })
      .catch(function (error) {
        //失败调用reject()
        reject(error)
      })
  })
}
