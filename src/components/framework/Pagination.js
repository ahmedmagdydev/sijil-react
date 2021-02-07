import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
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
  return (
    <PaginationStyle>
      <div onClick={() => props.gotoPage(0)}>{t("First")}</div>
      <div onClick={props.previousPage}>‹</div>
      {Array.from({ length: props.pageCount }).map((item, index) => {
        return (
          <div
            key={index}
            className={index == props.pageIndex ? "active page" : " page"}
            onClick={() => {
              props.gotoPage(index);
            }}
          >
            {index + 1}
          </div>
        );
      })}

      <div onClick={props.nextPage}>›</div>
      <div onClick={() => props.gotoPage(props.pageCount - 1)}>{t("Last")}</div>
    </PaginationStyle>
  );
}

export default Pagination;
