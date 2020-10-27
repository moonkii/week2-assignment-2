import React from 'react';

import Item from './Item';

export default function List({ tasks, onClickDeleteTask }) {
  return (
    tasks.length === 0 ? (
      <p>
        할 일이 없어요!
      </p>
    ) : (
      <ol>
        {tasks.map((task) => (
          <Item
            key={task.id}
            task={task}
            onClickDeleteTask={onClickDeleteTask}
          />
        ))}
      </ol>
    )
  );
}
