import { Container, Transaction } from '../styles/components/IcomesAndExpenses';


interface IncomesAndExpensesProps {
  name: string;
  price: string;
}

export function IncomesAndExpenses({
  name,
  price
}: IncomesAndExpensesProps) {
    return (
        <Container>
          <Transaction>
            <small>{name}</small>
            <strong>R$ {price}</strong>
          </Transaction>
          
        </Container>
    );
}