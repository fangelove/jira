
 export const isFalse = (value)=>value === 0
const cleanObject = (object) => {
  //在一个函数里，改变传入的值是不好的，所以需要拷贝一份
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(!value && !isFalse(value)){//有可能遇到0是有效值的情况
      delete result[key]
    }
  })
  return result
}
export default cleanObject