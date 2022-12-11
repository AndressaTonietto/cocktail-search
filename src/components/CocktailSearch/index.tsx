import { useState } from 'react';
import { Button, Container } from './styles';
import { createSearchParams, useNavigate } from 'react-router-dom';

const CocktailSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const params = encodeURI(query);
    navigate({
      pathname: 'search',
      search: createSearchParams({
        query: params,
      }).toString(),
    });
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
        <Button onClick={(event) => handleSubmit(event)}>Search</Button>
      </form>
    </Container>
  );
};

export default CocktailSearch;
