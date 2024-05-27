import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setToDos((current) => [toDo, ...current]);
  };

  return (
    <div>
      <h1>My To Dos = ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
