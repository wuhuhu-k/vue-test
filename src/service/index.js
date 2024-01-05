/*
 * @Descripttion: 
 * @Author: xianghaifeng
 * @Date: 2023-07-18 20:02:41
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2023-11-02 10:55:13
 */

import { $http } from '@commonbox/utils';

const STATUS_ERROR_NETWORK = '网络错误';
class RequsetServices {
  get(url, params) {
    return $http.get(url, {
      params,
    });
  }
  post(url, data, options) {
    return $http.post(url, data, {
      ...options,
    });
  }
  put(url, data, options) {
    return $http.put(url, data, {
      ...options,
    });
  }
  fetchData(promise, config = {}) {
    const { returnField = 'data', successField = 'code', successValue = ['200', 200], errMsgField = 'msg' } = config;
    return promise.then((res = {}) => {
      if (res.status === 200) {
        if (res.data && successValue.includes(res.data?.[successField])) {
          return returnField ? res.data[returnField] : res.data;
        }
        if (res.data?.[errMsgField]) {
          throw res.data[errMsgField]
        }
        throw res.data
      }
      throw STATUS_ERROR_NETWORK;
    }).catch((err) => {
      throw err;
    });
  }
  getData(url, params, config = {}) {
    return this.fetchData(this.get(url, params), config);
  }

  postData(url, data, options = { emulateJSON: true }, config = {}) {
    return this.fetchData(this.post(url, data, options), config);
  }

  getRawData(url, params, config = {}) {
    config.returnField = '';
    return this.getData(url, params, config)
  }

  postRawData(url, data, options, config = {}) {
    config.returnField = '';
    return this.postData(url, data, options, config)
  }
}
export const $req = new RequsetServices();
