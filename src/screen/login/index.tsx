import { FormEvent } from "react"
const apiUrl = process.env.REACT_APP_API_URL

const LoginScreen = ()=> {

  const login = (params:{username:string,password:string})=>{
    fetch(`${apiUrl}/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    }).then(res=> res.json()).then()



  }

  const handleLogin = (event:FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({username,password})

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
      <button type='submit'>登录</button>

    </form>
  )

}

export default LoginScreen