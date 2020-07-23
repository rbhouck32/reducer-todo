// import React from "react";
// import Todo from "./todo";

// const TodoList = props => {
//   return (
//     <div className="todo-list">
//       {props.things.map(thing => (
//         <Todo key={thing.id} thing={thing} toggleTodo={props.toggleTodo} />
//       ))}
//       <button className="clear-btn" onClick={props.clearTodo}>
//         Clear Thing Todo
//       </button>
//     </div>
//   );
// };

// export default TodoList;
import React, { useReducer } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { types, todoReducer, initialState } from "../reducers/index";

export const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos } = state;
  const { register, handleSubmit, reset } = useForm();

  const toggleComplete = id => {
    dispatch({ type: types.TOGGLE_COMPLETED, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: types.CLEAR_COMPLETED });
  };

  const addTodo = todo => {
    console.log(todo);
    dispatch({ type: types.ADD_TODO, payload: todo });
    reset();
  };

//   console.log("TODOS: ", todos);
console.log("rh: need this to work", state.todos)

  return (
    <Container>
      <h1>TODO List</h1>
      <div className="form-container">
        <Form onSubmit={handleSubmit(addTodo)}>
          <input
            type="text"
            ref={register}
            name="todo"
            placeholder="add new task 🧻"
          />
          <button type="submit">Add</button>
        </Form>
        <button className="clear" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
      <div className="todos">
        {todos.map(todo => {
          return (
            <Todo key={todo.id}>
              <h3
                onClick={() => toggleComplete(todo.id)}
                className={todo.completed ? "completed" : ""}
              >
                {`- ${todo.todo} ${todo.completed ? "✅" : "⭕"}`}
              </h3>
            </Todo>
          );
        })}
      </div>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: fit-content;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 5px;
  h1 {
    margin: 1rem 0 2rem 0;
  }
  .todos {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem 0;
    min-width: 382px;
    margin-top: 1rem;
  }
  .form-container {
    display: flex;
    align-items: center;
    button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: #e6fffa;
      color: #234e52;
      border: 2px solid #38b2ac;
      margin-left: 0.5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .clear {
      margin-left: 1rem;
      background-color: transparent;
      border: 2px solid #f56565;
      background-color: #fff5f5;
      color: crimson;
      opacity: 0.6;
      transition: all 150ms ease-in-out;
      &:hover {
        opacity: 1;
        transition: all 150ms ease-in-out;
      }
    }
  }
`;

const Todo = styled.div`
  color: #333;
  .completed {
    opacity: 0.6;
  }
`;

const Form = styled.form`
  input {
    padding: 0.5rem 1rem;
    border: none;
    border: 2px solid #e2e8f0;
    border-radius: 5px 0 0 5px;
  }
`;