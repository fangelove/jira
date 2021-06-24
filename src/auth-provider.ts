//定义一些函数，用来操控jwt的token
//firebase 第三方 auth 服务

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

const getToken = window.localStorage.getItem(localStorageKey)

export const handleUserResponse = (user: any)=> {
  window.localStorage.setItem(localStorageKey,user.token || '')



  return user
}

export const login = (params:{username:string,password:string})=>{
  return fetch(`${apiUrl}/login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(params)
  }).then(res=> res.json()).then((res)=>
    handleUserResponse(res?.user)
  ).catch(Promise.reject)
}

export const register = (params:{username:string,password:string})=>{
  return fetch(`${apiUrl}/register`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(params)
  }).then(res=> res.json()).then((res)=>
  handleUserResponse(res?.user)).catch(Promise.reject)
}

export const logout = async ()=> window.localStorage.removeItem(localStorageKey)
