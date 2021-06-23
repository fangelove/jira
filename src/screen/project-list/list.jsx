const List = (props)=> {
  const {list,users} = props
  return(
    <table>
      <thead>
      <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
        {
          list.map(item => <tr key={item.id}>
            <td>{item.name}</td>
            <td>{users.find(i=> i.id === item.personId)?.name || '未知'}</td>
          </tr>)
        }
      </thead>
    </table>
  )
}

export default List