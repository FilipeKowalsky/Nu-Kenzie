import { Container, PriceContainer } from "./styledValue";
import { Title3 } from "../../../styles/text"

export const ValueContainer = () =>{

  return(
    <Container>
      <PriceContainer>
        <Title3>Valor total:</Title3>
        <span></span>
      </PriceContainer>
      <p>O valor se refere ao saldo</p>
    </Container>
  )
}
