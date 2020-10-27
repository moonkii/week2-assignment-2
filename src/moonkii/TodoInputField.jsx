import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function TodoInputField({ onClickAdd }) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    const { target } = event;
    setValue(target.value);
  }

  function handleClick() {
    onClickAdd(value);

    setValue('');
  }

  return (
    <div>
      <Input
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
        placeholder="할 일을 입력해 주세요"
      />
      <Button onClick={handleClick}>
        추가
      </Button>
    </div>
  );
}
