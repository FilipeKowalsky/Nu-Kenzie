import styled from "styled-components";
import { SectionList, SectionText, StyledList, ListDiv } from "./styledList";
import { Title2, Title3, Text } from "../../../styles/text";
import { ButtonRemove } from "../buttons/button";

const StyledListWithStyles = styled(StyledList)`
  &.deposit {
    border-left: 4px solid var(--color-secondary);
  }

  &.withdraw {
    border-left: 4px solid var(--grey-2);
  }
`;

export const Finance = ({ products, deleteProduct }) => (
  <SectionList>
    <SectionText>
      <Title3>Resumo financeiro</Title3>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <StyledListWithStyles
              key={product.id}
              className={product.type}
            >
              <ListDiv>
                <Title2>{product.name}</Title2>
                <Text>{product.type === "deposit" ? "Entrada" : "Despesa"}</Text>
              </ListDiv>
              <ListDiv>
                <Text>R$ {product.price},00</Text>
                <ButtonRemove onClick={() => deleteProduct(product.id)}>Excluir</ButtonRemove>
              </ListDiv>
            </StyledListWithStyles>
          ))
        ) : (
          <Title2>Você ainda não possui nenhum lançamento</Title2>
        )}
      </ul>
    </SectionText>
  </SectionList>
);
