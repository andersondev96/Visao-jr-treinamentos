import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

`;

export const Balance = styled.div`
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem;
  }
`;

export const Transactions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 0.8rem;

  h2 {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 4rem 0;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20rem;
    margin: 2rem 0;    
  }

`;