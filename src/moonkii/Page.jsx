import React from 'react';

import TodoInputField from './TodoInputField';
import Button from './Button';

export default function Page({ todos, onClickAdd, onClickDelete }) {
  return (
    <>
      <h1>
        To-do
      </h1>
      <TodoInputField onClickAdd={onClickAdd} />
      {Object.keys(todos).length === 0 ? (
        <p>
          할 일이 없어요!
        </p>
      ) : (
        <ol>
          {Object.values(todos).map(({ id, todo, isDelete }) => (
            isDelete ? null : (
              <li key={id}>
                {todo}
                <Button onClick={() => onClickDelete(id)}>
                  완료
                </Button>
              </li>
            )
          ))}
        </ol>
      )}
    </>
  );
}
