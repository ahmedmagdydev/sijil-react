import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  div {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    color: #00b2e2;
    cursor: pointer;
    &.page.active {
      color: #fff;
      background: #00b2e2;
    }
    &.page {
      color: #a9c9ef;
    }
  }
`;
function Pagination({ ...props }) {
  const { t } = useTranslation();
  const getPagingRange = (current, { min = 1, total = props.pageCount, length = 5 } = {}) => {
    if (length > total) length = total;

    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);

    return Array.from({ length: length }, (el, i) => start + i);
  };
  console.log(getPagingRange(props.pageIndex));
  return (
    <PaginationStyle>
      <div onClick={() => props.gotoPage(0)}>{t('First')}</div>
      <div onClick={props.previousPage}>‹</div>
      {getPagingRange(props.pageIndex + 1).map((item) => {
        return (
          <div
            key={item}
            className={item == props.pageIndex + 1 ? 'active page' : ' page'}
            onClick={() => {
              props.gotoPage(item - 1);
            }}
          >
            {item}
          </div>
        );
      })}

      <div onClick={props.nextPage}>›</div>
      <div onClick={() => props.gotoPage(props.pageCount - 1)}>{t('Last')}</div>
    </PaginationStyle>
  );
}

export default Pagination;
