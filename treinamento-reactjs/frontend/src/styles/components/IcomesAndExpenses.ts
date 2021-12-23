import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.8rem;
  
  display: flex;
  flex-direction: column;
`;

export const Transaction = styled.div`
    margin-bottom: 2.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    small {
      font-family: 'Montserrat';
      font-size: 1.2rem;
      font-weight: 400;
    }

    strong {
      font-family: 'Montserrat';
      font-size: 1.6rem;
      font-weight: 800;
    }
`;