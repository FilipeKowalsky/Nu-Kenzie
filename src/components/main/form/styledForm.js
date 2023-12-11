import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 90%;
  max-width: 900px;

  @media (min-width: 800px) {
    max-width: 355px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 434px;
  padding: 30px;
  border: 1px solid var(--grey-5);
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--grey-1);
  background-color: var(--grey-1);
  border-radius: 8px;
`;

export const SelectData = styled.select`
  padding: 10px;
  border: 1px solid var(--grey-1);
  background-color: var(--grey-1);
  border-radius: 8px;
`;