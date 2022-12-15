import React,{useState ,useEffect} from 'react';
import './App.css';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
import { Todo } from './model';



const  App : React.FC = ()=>{


  const getLocalStorage=()=>{
    let myLocalTasks = localStorage.getItem('todos')
    if(myLocalTasks){
     return JSON.parse(localStorage.getItem('todos')|| "")
    }else{
      return []
    }
  }

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>(getLocalStorage)
  const handleAdd=(e: React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
   <span className="heading">
    Taskify
   </span>
   <InputFiled todo={todo} setTodo={setTodo} handleAdd={(e)=>handleAdd(e)}/>
   <TodoList  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
