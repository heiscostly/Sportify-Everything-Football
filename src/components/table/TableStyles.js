import styled from "styled-components";

export const TableContainer = styled.div`
  background: #ffffff;
  min-height: ${(props) => (props.height ? props.height : "50vh")};
  margin-top: ${(props) => (props.noMargin ? "0px" : "17px")};
  width: 100%;
  overflow-x: auto;
  display: flex;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  flex-direction: column;
  justify-content: space-between;

  table {
    width: 100%;
    overflow-x: scroll;
  }

  thead {
    // background: #fafafb;
    box-shadow: inset 0px -1px 0px #edf2f7;
    height: 52px;

    th {
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
      text-align: left;
      padding: 12px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #8492a6;

      :first-child {
        padding-left: 24px;
      }
      :last-child {
        padding-right: 30px;
      }

      border: none;
    }
  }

  tbody {
    width: 100%;
    tr {
      height: 50px;
      background: #ffffff;
      box-shadow: 0px 0.33px 0px rgba(0, 0, 0, 0.12);

      :not(:last-child) {
        border-bottom: 1px solid #e9e9e9 !important;
      }
      &:hover {
        height: ${(props) => (props.height ? props.height : "65px")};
        cursor: pointer;
      }
    }

    td {
      height: 55px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #425466;
      vertical-align: middle !important;
      white-space: nowrap;
      padding: 12px;

      img {
        max-width: 50px;
        margin-right: 10px;
        // height: auto;
      }

      span {
        font-size: 14px;
        justify-self: center;
        display: flex;
      }

      :first-child {
        display: flex;
        align-items: center;
        padding-left: 24px;
        color: #27272e;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
      }

      :last-child {
        padding-right: 35px;
      }
      border: none;
    }
  }

  // @media screen and (max-width: 550px) {
  //   // padding: 0;
  //   th {
  //     // border: none !important;
  //     // background: #f2f3f4;
  //     // :first-child {
  //     //   border-radius: 10px 0 0 10px;
  //     // }
  //     // :last-child {
  //     //   border-radius: 0 10px 10px 0;
  //     // }
  //   }
  //   tbody {
  //     td {
  //       border: none !important;
  //     }
  //   }
  // }
`;
export const TableSection = styled.div`
  min-height: 40vh;
  width: 100%;
  text-transform: capitalize;
  margin: 0;
`;

export const Header = styled.div`
  margin: 21px 0 14px 24px;
  letter-spacing: -0.01px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #1f2d3d;
  backgroud: #ffffff;
  display: flex;
  justify-content: space-between;
  .see-btn {
    border: none;
    background: #ffffff;
    color: #14772a;
    padding-right: 40px;
  }
`;

export const PaginationComponent = styled.div`
  align-self: flex-end;
  justify-content: space-around;
  margin: 20px;
  bottom: 0;
  right: 30px;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;

  div {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
`;
