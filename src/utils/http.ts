import qs from "qs"
import * as auth from '../auth-provider'

const apiUrl = process.env.REACT_APP_API_URL

interface IConfig extends RequestInit {
  data?:object,
  token?:string

}

export const http = async (endpoint:string,{data,token,headers,...customConfig}:IConfig)=> {
  const config = {
    method:'GET',
    headers: {
      Authorization:token ? `Bearer${token}` : '',
      'Content-Type':data ? 'application/json':''
    },
    ...customConfig

  }
  if(config.method.toLocaleUpperCase() === 'GET'){
    endpoint += `?${qs.stringify(data)}`
  }else {
    config.body =JSON.stringify(data || {})
  }

  return window.fetch(`${apiUrl}/${endpoint}`,config)
  .then(res=> res.json())
  .then((res)=> {
    if(res.status === 401){
      auth.logout()
      window.location.reload()
      return Promise.reject({message:'请重新登录'})

    }
    return res

  }).catch(Promise.reject)

}