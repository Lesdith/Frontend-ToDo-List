import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useEffect } from "react";
import axios from "axios";
import { getTodos, updateTodoData } from "../lib/api";


function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((todos) => setTodos(todos))
      .catch((error) => alert(error.message));
  }, []);

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    axios.post("http://localhost:3001/v1/to-dos", { ...todo }).then(() => {
      getTodos()
        .then((todos) => setTodos(todos))
        .catch((error) => alert(error.message));
    });
  };

  const showDescription = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.showDescription = !todo.showDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, { title, description }) => {
    if (!title || /^\s*$/.test(title)) {
      return;
    }

    updateTodoData(todoId, { title, description })
      .then(() => {
        getTodos()
          .then((todos) => setTodos(todos))
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  const removeTodo = (id) => {
    axios.delete(`http://localhost:3001/v1/to-dos/${id}`).then(() => {
      getTodos()
        .then((todos) => setTodos(todos))
        .catch((error) => alert(error.message));
    });
  };

  const completeTodo = (id, is_done) => {
    updateTodoData(id, { isDone: is_done === 1 ? 0 : 1 })
      .then(() => {
        getTodos()
          .then((todos) => setTodos(todos))
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <h1>ToDo List!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    
      {/* Intentando crear botones para pasar a la siguiente pagina 
       <div class="form-group">
       <button type="submit" class="btn btn-primary btn-xs"> Back </button>       
       <button type="submit" class="btn btn-primary btn-xs"> Next </button>       
      </div> 
     */}

    </>
  );
}

export default TodoList;