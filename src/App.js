import React from 'react';
import TodoList from './Todo/TodoList'
import Height from './HeightDet/Height'
import coomp from './getFromServ'

function App() {
  const todos=[
    {id:1 ,completed:false, title:'aaa'},
    {id:2 ,completed:false, title:'bbb'},
    {id:3 ,completed:false, title:'ccc'}

  ]
  return (
    <div className="wrapper">
      <h1>Hello word</h1>
      <TodoList todos={todos}></TodoList>
      <Height></Height>

    </div>
  );
}

export default App;
