import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 900px;
height: 100px;
padding: 30px;
border: 1px solid var(--grey-5);
margin-top: 20px;

@media (min-width: 800px) {
  max-width: 355px;
}
` 

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`