import styled from "styled-components";
export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: -6px 6px 30px rgba(0, 0, 0, 0.08);
  width: 300px;
  height: 145px;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  align-items: center;
  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 350px) {
    justify-self: center;
    width: 95%;
  }
  .image__cont {
    margin: 10px;
    img {
      width: 100px;
    }
  }

  .content__cont {
    h4 {
      margin: 0;
      padding: 0;
      color: #5c5c5c;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
    }
    p {
      margin: 0;
      padding: 0;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #5c5c5c;
    }
  }
`;
