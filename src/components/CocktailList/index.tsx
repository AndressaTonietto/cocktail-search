import Error from '../Error';
import Loading from '../Loading';
import {
  Container,
  CocktailLabel,
  ImgGradient,
  StyledImg,
  StyledLink,
} from './styles';

type CocktailListProps = {
  drinks?: CocktailProps[];
  loading: boolean;
  errorMessage?: string;
};

const CocktailList = ({ drinks, loading, errorMessage }: CocktailListProps) => {
  if (loading) return <Loading />;
  if (errorMessage) return <Error errorMessage={errorMessage} />;

  return (
    <Container>
      {drinks?.map((drink, index) => (
        <StyledLink to={`/cocktails/${drink.idDrink}`} key={index}>
          <StyledImg
            alt={drink.strDrink}
            src={`${drink.strDrinkThumb}/preview`}
          />
          <ImgGradient />
          <CocktailLabel>{drink.strDrink}</CocktailLabel>
        </StyledLink>
      ))}
    </Container>
  );
};

export default CocktailList;
