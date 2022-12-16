
import React,{useState ,useRef, useEffect,FormEvent} from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { ITask } from "../Interface";
type Props = {
    key:number
    task:ITask,
    todos: ITask[],
    setTodos: React.Dispatch<React.SetStateAction<ITask[]>>,
  }
const SingleTodo: React.FC<Props>= ({ task,todos, setTodos,  key}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.taskName);

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    
   const handleDone =(id:number)=>{
    setTodos(todos.map((task) => 
    task.id === id ? { ...task, isDone: !task.isDone } : task))
   }
   
   const handleDelete =(id:number)=>{
    setTodos(todos.filter((task) =>  task.id !== id))
   }

   const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((task) => (task.id === id ? { ...task, taskName: editTask } : task))
    );
    setEdit(false);
  };

  return (
    <form  className="todos__single"   onSubmit={(e) => handleEdit(e, task.id)}>
         {edit ? (
            <input
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : 
            task.isDone?(
                <s className="todos__single--text">{task.taskName}</s>
            ):(
                <span className="todos__single--text">{task.taskName}</span>
            )
        }
    
        <div>
           <span className="icon" onClick={() => handleDone(task.id)}>
            <MdDone style={{color:"green"}}/>
           </span>
           <span className="icon"  onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);//true
                }
              }}>
            <AiFillEdit style={{color:"blue"}}/>
           </span>
           <span className="icon" onClick={() => handleDelete(task.id)}>
            <AiFillDelete  style={{color:"red"}}/>
           </span>
        </div>
    </form>
  )
}

export default SingleTodo