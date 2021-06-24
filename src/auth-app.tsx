import { useAuth } from "./context/auth-context"
import ProjectListScreen from "./screen/project-list"

export const AuthApp = ()=> {
  const {logout} = useAuth()
  return(
    <>
    <button onClick={()=> logout()}>登出</button>
    <ProjectListScreen></ProjectListScreen>

    </>
  )
}