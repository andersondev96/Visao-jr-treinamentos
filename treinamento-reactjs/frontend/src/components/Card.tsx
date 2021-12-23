import { CardContainer } from "../styles/components/Card";

interface CardProps {
  title: string;
  value: number;
}

export function Card({ title, value }: CardProps) {
  return (
    <CardContainer>
      <small>{title}</small>
      <strong>
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </strong>
    </CardContainer>
  );
}
