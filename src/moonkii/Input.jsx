import React from 'react';

export default function Input({
  name, type, value, placeholder, onChange,
}) {
  return (
    <input
      id="input-todo"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
