import React from "react";
import UserList from './components/UserList';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de usuarios con Axios</h1>
      <UserList />
    </div>  );
}

export default App;
