import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const GroupInputStyle = styled.div`
  position: relative;
  input {
    border-radius: 15px;
    border: 1px solid #9eb9d8;
    padding: ${(props) => (props.lang == 'en' ? '12px 50px 12px 20px' : '12px 20px 12px 50px')};
    outline: none;
    width: 100%;
  }
  label {
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
function GroupFileInput({ lang, handleClick, onBlur, name, placeholder, id }) {
  const { t } = useTranslation();
  return (
    <GroupInputStyle lang={lang}>
      <input
        onBlur={onBlur}
        name={name}
        type="file"
        multiple
        placeholder={placeholder}
        onChange={(e) => {
          handleClick(e.target.files);
        }}
        id={id}
        accept="image/png,image/jpeg,application/pdf"
        hidden
      />
      <input type="text" readOnly={true} placeholder={placeholder} />
      <label htmlFor={id}>{t('Browse')}</label>
    </GroupInputStyle>
  );
}

export default GroupFileInput;
