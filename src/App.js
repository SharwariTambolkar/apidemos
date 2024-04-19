import { useState } from 'react';
import './App.css';
//import UserList from './Components/UserList';
import UserList from './component/UserList';
function App() {
  const [todos, setTodos] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setTodos(data);
      // console.log(data);
    })
    console.log(todos);
  return (
    <>
      <UserList todos={todos}></UserList>
    </>
  );
}

export default App;