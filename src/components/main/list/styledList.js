import styled from "styled-components";

export const SectionList = styled.section`
  width: 90%;
  max-width: 900px;
`

export const SectionText = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const StyledList = styled.li`
  border: 1px solid var(--grey-1);
  background: var(--grey-1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 90px;
  }
`

export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  @media (min-width: 800px) {
    height: 90%;
    justify-content: space-around;
  }
  
`