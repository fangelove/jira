import { FormEvent } from "react"
import { useAuth } from "../context/auth-context"

const RegisterScreen = ()=> {
  const {register,user} = useAuth()




  const handleLogin = (event:FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    register({username,password})

  }
  return(
    <form onSubmit={handleLogin}>

      <>
        <label htmlFor="username">用户名</label>
        <input type="text" id='username'/>

      </>
      <>
        <label htmlFor="password">密码</label>
        <input type="password" id='password'/>

      </>
      <button type='submit'>注册</button>

    </form>
  )

}

export default RegisterScreen