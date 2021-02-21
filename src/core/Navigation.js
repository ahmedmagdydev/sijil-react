import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { axiosInstance } from '../hooks/axiosRequest';
const NavigationStyle = styled.ul`
  padding-right: 0;
  a {
    height: 30px;
    border-radius: 9px;
    padding: ${(props) => (props.dir === 'rtl' ? '3px 40px 3px 0' : '3px 0 3px 40px')};
    margin-top: 15px;
    text-align: ${(props) => (props.dir === 'rtl' ? 'right' : 'left')};
    color: #9dc1e5;
    position: relative;
    &:hover,
    &.active {
      background-color: #274d72;
      text-decoration: none;
    }
  }

  i.fa {
    display: inline-block;
    height: 30px;
    position: absolute;
    left: ${(props) => (props.dir === 'rtl' ? 'auto' : '0')};
    right: ${(props) => (props.dir === 'rtl' ? '0' : 'auto')};
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
  }
  li a.active i.fa {
    background-color: #00b3de;
    color: #fff;
    border-radius: 9px;
  }
`;
const activeLink = (url) => {
  return document.location.href.indexOf(url) >= 0 ? 'active' : '';
};
function Navigation() {
  const { t, i18n } = useTranslation();
  const getLang = () => i18n.language || window.localStorage.i18nLng;
  const [navigationList, setNavigationList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get('navigationlist')
      .then((navigationList) => {
        setNavigationList(navigationList.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);
  return (
    <NavigationStyle
      dir={getLang() === 'ar' ? 'rtl' : 'ltr'}
      className="list-unstyled mt-4 navigation"
    >
      {navigationList.map((item) => (
        <li key={item.title}>
          <a href={item.link} className={`d-block ${activeLink(item.title)}`}>
            <i className={'fa fa-' + item.icon}></i>
            {t(item.title)}
          </a>
        </li>
      ))}
    </NavigationStyle>
  );
}

export default Navigation;
