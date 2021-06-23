
 const  SearchPanel= (props)=> {
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