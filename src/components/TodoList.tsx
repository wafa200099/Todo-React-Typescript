import React,{FC} from "react";
import { ITask } from "../Interface";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: ITask[],
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>,
}
const TodoList: FC<Props> = ({todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((task) => (
      <SingleTodo task={task} todos={todos} setTodos={setTodos} key={task.id} />
      ))}
    </div>
  );
};

export default TodoList;
