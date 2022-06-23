import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const LOCAL_STORAGE_KEY = 'progate-todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    filterHandler();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos, status]);

  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todos) => todos.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todos) => todos.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Progate To Do List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} setTodos={setTodos} todos={todos} setInputText={setInputText} />
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
