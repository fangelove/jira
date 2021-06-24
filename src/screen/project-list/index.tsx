import SearchPanel from './search-panel'
import List from './list'
import { useState,useEffect } from 'react'
import objectClean from '../../utils'
import { useMount,useDebounce } from '../../utils'
import { useHttp } from '../../utils/http'

 const ProjectListScreen = ()=> {

  const [params,setParams] = useState({
    name:'',
    personId:''
  })
  const client = useHttp()
  const debounceParams = useDebounce(params,1000)
  const [users,setUsers] = useState([])
  const [list,setList] = useState([])

  useEffect(()=> {
    client('projects',{data:objectClean(debounceParams)}).then(setList)
  },[debounceParams])

  useMount(()=> {
    client('users').then(setUsers)
  })

  return(
    <>
    <SearchPanel params={params} setParams={setParams} users={users}/>
    <List list = {list} users={users}/>
    </>
  )
}

export default ProjectListScreen