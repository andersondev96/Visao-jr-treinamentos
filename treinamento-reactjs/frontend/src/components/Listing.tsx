import { Container } from "../styles/components/Listing";

interface ListingProps {
  date: string;
  title: string;
  description: string;
  price: Number;
}

export function Listing({ date, title, description, price }: ListingProps) {
  return (
    <Container>
      <div className="date">
        <small>{date}</small>
      </div>
      <div className="transaction">
        <div className="description">
          <strong>{title}</strong>
          <small>{description}</small>
        </div>
        <div className="price">
          <strong style={price >= 0 ? { color: "green" } : { color: "red" }}>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
      </div>
    </Container>
  );
}
