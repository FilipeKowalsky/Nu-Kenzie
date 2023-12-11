import { ButtonStyled, ButtonRemoveStyled } from './styledButton';

export const Button = () =>{

  return(
    <>
      <ButtonStyled type="submit">Inserir valor</ButtonStyled>
    </>
  )
}

export const ButtonRemove = ({ onClick, children }) => (
  <ButtonRemoveStyled onClick={onClick}>{children}</ButtonRemoveStyled>
);