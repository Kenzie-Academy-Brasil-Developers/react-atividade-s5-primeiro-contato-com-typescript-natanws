import { Container } from "./styles";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <Container>
      <h2>{name}</h2>
      <span>{age}</span>
      <span>{hobby}</span>
    </Container>
  );
};
