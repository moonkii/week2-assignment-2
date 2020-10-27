import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({
  taskTitle, tasks, onChangeTitle, onClickAddTask, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <List
        tasks={tasks}
        onClickDeleteTask={onClickDeleteTask}
      />
    </div>
  );
}
