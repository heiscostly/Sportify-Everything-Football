import styled from "styled-components";
export const SportContainerDiv = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  // position: absolute;
  // top: 300px;
  padding-bottom: 50px;
  .cont {
    margin-top: -50px;
    border-radius: 10px;
    padding: 20px;
    background: #ffffff;
    border: 2px solid #f4f4f4;
  }
  .sports-container {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
    .sports-container {
      padding: 20px 0;
      // display: flex;
      // flex-direction: column;
      // border: 1px solid blue;
      // width: 100%;
      // overflow-x: hidden;
    }
  }
`;
