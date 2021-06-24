export interface IUsers{
  id:number,
  name:string,
  token:string

}
interface ISearchPanelProps  {
  users:IUsers[],
  params:{
    name:string,
    personId:string
  },
  setParams(param:ISearchPanelProps['params']):void

}
 const  SearchPanel= (props:ISearchPanelProps)=> {
  const {params,setParams,users} = props


  return(
    <form>
      <>
        <input type='text' value={params.name} onChange={e=> setParams({...params,name:e.target.value})}/>
        <select value={params.personId} onChange={e=> setParams({...params,personId:e.target.value})}>
          <option value="">负责人</option>
          {
            users.map(item=>  <option value={item.id} key={item.id}>{item.name}</option>)
          }

        </select>
      </>
    </form>
  )
}

export default SearchPanel