import {
  Details,
  Container,
  InfoContainer,
  Ingredients,
  Instructions,
  TagContainer,
  Tag,
} from './styles';

type DetailsProps = {
  drink?: DetailedCocktailProps;
  ingredients: any;
};

const CocktailDetails = ({ drink, ingredients }: DetailsProps) => (
  <Details>
    <h1>{drink?.strDrink}</h1>
    <Container>
      <div>
        <img src={drink?.strDrinkThumb} alt={drink?.strDrink} width={300} />
      </div>
      <InfoContainer>
        <Ingredients>
          <span>Ingredients:</span>
          {ingredients.map((ingredient: any) => ingredient).join(', ')}
        </Ingredients>
        <Instructions>
          <span>Instructions:</span>
          {drink?.strInstructions}
        </Instructions>
        <TagContainer>
          {drink?.strTags?.split(',').map((item: any) => (
            <Tag>{item}</Tag>
          ))}
        </TagContainer>
      </InfoContainer>
    </Container>
  </Details>
);

export default CocktailDetails;
