import {
  Container,
  CocktailLabel,
  ImgGradient,
  StyledImg,
  StyledLink,
} from './styles';

type CocktailListProps = {
  drinks?: CocktailProps[];
};

const CocktailList = ({ drinks }: CocktailListProps) => (
  <Container>
    {drinks?.map((drink, index) => (
      <StyledLink to={`cocktails/${drink.idDrink}`} key={index}>
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

export default CocktailList;
