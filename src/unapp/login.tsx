import { FormEvent } from "react"
import { useAuth } from "../context/auth-context"

const LoginScreen = ()=> {
  const {login,user} = useAuth()




  const handleLogin = (event:FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({username,password})

  }
  return(
    <form onSubmit={handleLogin}>
      {
        user ? <div>登录成功，用户名是：{user.name} ,token是：{user.token}</div> : null
      }

      <>
        <label htmlFor="username">用户名</label>
        <input type="text" id='username'/>

      </>
      <>
        <label htmlFor="password">密码</label>
        <input type="password" id='password'/>

      </>
      <button type='submit'>登录</button>

    </form>
  )

}

export default LoginScreen