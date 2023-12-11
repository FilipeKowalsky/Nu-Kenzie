import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    & {
      width: 90%;
      flex-direction: row;
      align-items: flex-start;
      gap: 30px;
    }  
  }
`;
