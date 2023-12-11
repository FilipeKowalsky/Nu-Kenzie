import LogoImg from "../../assets/Nu Kenzie.png"
import { StyledHeader , StyledContainer } from "./styledHeader"


export const Header = () => {
  return(
    <StyledHeader>
      <StyledContainer>
        <img src={LogoImg} alt="Logo Nu Kenzie" />
      </StyledContainer>
    </StyledHeader>
  )
}