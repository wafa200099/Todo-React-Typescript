import React,{useRef,FC,FormEvent} from 'react'
import { ITask } from '../Interface'
import './styles.css'
interface Props{
    task:string,
    setTask: React.Dispatch<React.SetStateAction<string>>
    todos:ITask []
    setTodos: React.Dispatch<React.SetStateAction<ITask[]>>
}
const InputFiled:FC<Props>=({task,setTask,todos,setTodos}) =>{
 const inputRef = useRef<HTMLInputElement>(null)

 const handleAdd=(e:FormEvent)=>{
  e.preventDefault()
  if(task){
    let newTask={id:Date.now(),taskName:task,isDone:false}
    setTodos([...todos,newTask])
    setTask("")
  }
}
  return(
    <form  className="input" onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur()
    }
    }>
    <input ref={inputRef} type="input" placeholder='Enter a Task' className='input__box' value={task} onChange={(e)=>setTask(e.target.value)}/> 
    <button type='submit'className="input__submit">+</button>
  </form>
  ) 

}

export default InputFiled