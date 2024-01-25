import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Use an asynchronous function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the asynchronous function
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
