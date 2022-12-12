import { Container } from './styles';

type ErrorPros = {
  errorMessage: string;
};

const Error = ({ errorMessage }: ErrorPros) => {
  return (
    <Container>
      <h4>{errorMessage}</h4>
    </Container>
  );
};

export default Error;
