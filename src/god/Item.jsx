import React from 'react';

export default function List({ task: { id, title }, onClickDeleteTask }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDeleteTask(id)}>
        완료
      </button>
    </li>
  );
}
