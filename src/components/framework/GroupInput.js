import React, { useState } from 'react';
import styled from 'styled-components';
const GroupInputStyle = styled.div`
  position: relative;
  input {
    border-radius: 15px;
    border: 1px solid #9eb9d8;
    padding: ${(props) => (props.lang == 'en' ? '12px 50px 12px 20px' : '12px 20px 12px 50px')};
    outline: none;
    width: 100%;
  }
  button {
    border-radius: 15px;
    border: 1px solid #00b2e2;
    padding: 12px 25px;
    background: #00b2e2;
    color: #fff;
    position: absolute;
    right: ${(props) => (props.lang == 'en' ? '0' : 'auto')};
    left: ${(props) => (props.lang == 'en' ? 'auto' : '0')};
  }
`;
function GroupInput({ lang, handleClick, onBlur, name, placeholder, label }) {
  const [value, setValue] = useState('');

  return (
    <GroupInputStyle lang={lang}>
      <input
        value={value}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleClick(value);
          setValue('');
        }}
      >
        {label}
      </button>
    </GroupInputStyle>
  );
}

export default GroupInput;
