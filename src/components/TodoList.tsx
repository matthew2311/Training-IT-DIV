import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface ITodos {
  id: number
  todo: string
}

const TodoList =() => {

  const [todos, setTodos] = useState<ITodos[]>([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos?limit=10')
    .then(res => setTodos(res.data.todos))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(((todo: ITodos) => {
          return(
            <li key={todo.id}>
              <Link to={`/tododetail/${todo.id}`}>{todo.todo}</Link>
            </li>
          )
        }))}
      </ul>
    </div>
  )
}

export default TodoList;