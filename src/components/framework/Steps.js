import styled from 'styled-components';

const Steps = styled.div`
  overflow: hidden;
  position: relative;
  div[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
  &:before {
  }
  .step {
    margin-bottom: 40px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: ${(props) => (props.lang == 'en' ? '-16px' : 'auto')};
      right: ${(props) => (props.lang == 'en' ? 'auto' : '-16px')};
      display: block;
      width: 5px;
      height: 100%;
      background: url(../steps.jpg);
      top: 32px;
    }
    &:after {
      content: '';
      position: absolute;
      left: ${(props) => (props.lang == 'en' ? '-21px' : 'auto')};
      right: ${(props) => (props.lang == 'en' ? 'auto' : '-21px')};
      display: block;
      width: 15px;
      height: 15px;
      background: #00b2e2;
      border-radius: 50%;
      top: 5px;
    }
  }
  table {
    background: #f9fafd;
    border-radius: 18px;
    overflow: hidden;
    thead tr {
      background: #fff;
      th {
        border-bottom: 1px solid #dfe1e4;
      }
    }
    td,
    th {
      border: none;
      padding: 20px;
    }
    td {
      border-left: 1px dashed #efefef;
    }
    tbody tr:nth-of-type(odd) {
      background: #fff;
    }
  }
`;

export default Steps;
