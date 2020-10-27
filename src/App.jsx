import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [todos, setTodos] = useState({});

  function handleClickAdd(todo) {
    const id = Object.keys(todos).length;
    setTodos({
      ...todos,
      [id]: {
        id,
        todo,
        isDelete: false,
      },
    });
  }

  function handleClickDelete(id) {
    setTodos({
      ...todos,
      [id]: {
        ...todos[id],
        isDelete: true,
      },
    });
  }

  return (
    <Page
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickDelete={handleClickDelete}
    />
  );
}
