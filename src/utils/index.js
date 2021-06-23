import { useEffect, useState } from "react"

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

//写一个自定义hook，避免满屏的useEffect
export const useMount = (callback) => {
useEffect(()=> {
  callback()

},[])
}


//写一个防抖的hook
export const useDebounce = (value,delay=300)=> {
  const [debounceValue,setDebounceValue] = useState(value)
  // let timer;
  // return (...args) => {
  //   clearTimeout(timer);
  //   timer = setTimeout(() => { value.apply(this, args); }, delay);
  // };

  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setDebounceValue(value)
    },delay)
    //useEffect中的return 是在上次执行完之后执行
    //一般用来做清理工作  清理上一个定时器
    return ()=> clearTimeout(timeout)

  },[value,delay])

  return debounceValue

}