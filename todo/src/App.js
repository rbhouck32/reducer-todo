import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList }  from "./components/todolist"
import styled from "styled-components"

function App() {
  return (
    <div className="App">
<Container>
<TodoList/>
</Container>
     
    </div>
  );
}

export default App;



const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  padding: 5rem;
  background-color: #eee;
`;