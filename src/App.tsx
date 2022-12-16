import React,{FC,useState} from 'react';
import './App.css';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
import { ITask } from './Interface';



const  App : FC = ()=>{


  const [task, setTask] = useState<string>("")
  const [todos, setTodos] = useState<ITask[]>([])

  return (
    <div className="App">
   <span className="heading">
    Taskify
   </span>
   <InputFiled task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
   <TodoList  todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
