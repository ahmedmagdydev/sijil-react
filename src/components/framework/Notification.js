import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const AlertStyle = styled.div`
  .alert {
    background-color: #fff;
    border-radius: 10px;
    .icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 19px;
    }
    &.success {
      box-shadow: 0 0px 5px 1px #abe8d6;
      .icon {
        background-color: #f8fef8;
        color: #3fd538;
      }
    }
    &.warning {
      box-shadow: 0 0px 5px 1px #e6a6d1;
      .icon {
        background-color: #ffeef1;
        color: #ff2d55;
      }
    }
    &.info {
      box-shadow: 0 0px 5px 1px #f9eaa7;
      .icon {
        background-color: #fefaed;
        color: #f1cd2d;
      }
    }
  }
`;
const alertIcon = (alert) => {
  switch (alert) {
    case 'success':
      return 'fa-check';
    case 'warning':
      return 'fa-close';
    case 'info':
      return 'fa-info-circle';
    default:
      return 'fa-check';
  }
};
function Notification({ alert, content, date }) {
  const { i18n } = useTranslation();
  return (
    <AlertStyle>
      <div className={'alert p-4 ' + alert}>
        <div className={'d-flex align-items-center'}>
          <div className={'icon ' + (i18n.language == 'en' ? 'mr-2' : 'ml-2')}>
            <i className={'fa ' + alertIcon(alert)}></i>
          </div>
          <p className={'m-0'}>{content}</p>
          <div className={'time ' + (i18n.language == 'en' ? 'ml-auto' : 'mr-auto')}>{date}</div>
        </div>
      </div>
    </AlertStyle>
  );
}

export default Notification;
