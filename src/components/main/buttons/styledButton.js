import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  background: var(--color-primary);
  color: white;
  font-size: 16px;

  :hover{
    border: 1px solid var(--color-primary-2);
    background: var(--color-primary-2);
  }
`

export const ButtonRemoveStyled = styled.button`
  width: 50px;
  heigth: 20px;
  border: 1px solid var(--grey-2);
  background: var(--grey-2);
  border-radius: 4px;
  font-size: 10px;
`