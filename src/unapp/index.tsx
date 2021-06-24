import { useState } from "react"
import LoginScreen from "./login"
import RegisterScreen from "./register"

export const UnApp = ()=> {
  const [register,setRegister] = useState(false)
  return(
    <>
      {
        register ?<RegisterScreen></RegisterScreen> :<LoginScreen></LoginScreen>
      }
      <button onClick={()=>setRegister(!register)}>切换到{register ? '登录' : '注册'}</button>
    </>
  )

}