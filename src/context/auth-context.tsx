import React, { ReactNode, useState } from "react"
import * as auth from '../auth-provider'
import {IUsers} from '../screen/project-list/list'
import { useMount } from "../utils"
import { http } from "../utils/http"
interface AuthForm {
  username:string,
  password:string
}
const AuthContext = React.createContext<{
  user:IUsers | null,
  login:(form:AuthForm) => Promise<void>,
  register:(form:AuthForm) => Promise<void>,
  logout:() => Promise<void>,

} | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

const bootstrapUser = async()=>{
  let user = null
  const token = auth.getToken
  if(token){
    const data = await http('me',{token})
    user = data.user

  }
  return user

}
export const AuthProvider = ({children}:{children:ReactNode})=> {
  const [user,setUser] = useState<IUsers | null>(null)
  const login = (form:AuthForm)=> auth.login(form).then(setUser)
  const register = (form:AuthForm)=> auth.register(form).then(setUser)
  const logout = ()=> auth.logout().then(()=> setUser(null))

  useMount(()=> {
    bootstrapUser().then(setUser)
  })

  return<AuthContext.Provider value={{user,login,register,logout}} children={children}></AuthContext.Provider>
}

export const useAuth = ()=> {
  const context = React.useContext(AuthContext)
  if(!context){
    throw new Error('userAuth必须在AuthProvider中使用')

  }else {
    return context

  }

}