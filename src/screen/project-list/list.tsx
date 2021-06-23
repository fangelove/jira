

export interface IUsers{
  id:number,
  name:string

}
export interface IList{
    id: number,
    name: string,
    personId: string,
    organization: string,
    created: number

}
interface IListProps {
  list:IList[],
  users:IUsers[]
}
const List = (props:IListProps)=> {
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
            <td>{users.find(i=> i.id === Number(item.personId))?.name || '未知'}</td>
          </tr>)
        }
      </thead>
    </table>
  )
}

export default List