import "./App.css";
import { todoList } from "./mock/todo";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="title">Todolist:</h1>
      <div className="container">
        {todoList.map((todo) => (
          <Card props={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
