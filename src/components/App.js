
import React from "react";
import './../styles/App.css';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };



  return (
    <div>
        {/* Do not remove the main div */}
       
      <TodoList todos={todos} handleComplete={handleComplete} />
  
    </div>
  )
}

export default App
