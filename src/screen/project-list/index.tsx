import SearchPanel from './search-panel'
import List from './list'
import { useState,useEffect } from 'react'
import qs from 'qs'
import objectClean from '../../utils'
import { useMount,useDebounce } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL
 const ProjectListScreen = ()=> {

  const [params,setParams] = useState({
    name:'',
    personId:''
  })
  const debounceParams = useDebounce(params,1000)
  const [users,setUsers] = useState([])
  const [list,setList] = useState([])

  useEffect(()=> {
    fetch(`${apiUrl}/projects?${qs.stringify(objectClean(debounceParams))}`).then(res=> res.json()).then(res=>setList(res))
  },[debounceParams])

  useMount(()=> {
    fetch(`${apiUrl}/users`).then(res=> res.json()).then(res=> setUsers(res))
  })

  return(
    <>
    <SearchPanel params={params} setParams={setParams} users={users}/>
    <List list = {list} users={users}/>
    </>
  )
}

export default ProjectListScreen