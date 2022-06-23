import React from 'react';

function Form({ setInputText, inputText, setTodos, todos, setStatus }) {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }
  function submitTodoHandler(e) {
    e.preventDefault();
    if (inputText === '') {
      return alert('Your Task is Empty!');
    }
    setTodos([...todos, { text: inputText, completed: false, id: +new Date() }]);
    setInputText('');
  }
  function statusHandler(e) {
    setStatus(e.target.value);
  }
  return (
    <form>
      <input placeholder="Add a Task" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
