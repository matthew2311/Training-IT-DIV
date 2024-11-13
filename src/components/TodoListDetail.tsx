import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface ITodoDetail {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoListDetail = () => {

  const {id} = useParams();

  const [todoDetail, setTodoDetail] = useState<ITodoDetail>({ id: 0, todo: '', completed: false });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`)
      .then(res => {
        setTodoDetail(res.data)
        setIsLoading(false);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <>
      <h1>Todo List Detail</h1>
      {!isLoading ? (
        <>
          <p><strong>ID:</strong>{todoDetail.id}</p>
          <p><strong>Todo:</strong>{todoDetail.todo}</p>
          <p><strong>Completed:</strong>{todoDetail.completed ? 'Yes' : 'No'}</p>
        </>
      )
      : (
        <p>Loading...</p>
      )
    }
    </>
  )

}


export default TodoListDetail;