import styled from "styled-components";
export const SportContainerDiv = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
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
    }
  }
  .champ-cont {
    margin-top: -50px;
    border-radius: 10px;
    padding: 20px;
    background: #ffffff;
    border: 2px solid #f4f4f4;
    @media (max-width: 768px) {
      overflow-x: auto;
    }
    h4 {
      a {
        text-decoration: none;
        color: #000000;
        border-bottom: 2px solid #030e4b;
        margin-right: 10px;
        padding: 10px 0;
      }
      a:hover {
        background: #347ab8;
        color: #ffffff;

    }
    
  }
`;
