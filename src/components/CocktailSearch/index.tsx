import { useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

type CocktailSearchProps = {
  setDrinks: React.Dispatch<React.SetStateAction<CocktailProps[] | []>>;
};

const CocktailSearch = ({ setDrinks }: CocktailSearchProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const url = `search.php?s=${query}`;
      const res = await api.get(url);
      setDrinks(res.data.drinks);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <h1>Cocktail Search</h1>
      <form>
        <input
          aria-label="Search cocktails"
          placeholder="Search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={(event) => handleSubmit(event)}>Search</button>
      </form>
    </Container>
  );
};

export default CocktailSearch;
