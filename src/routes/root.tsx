import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

type DrinkProps = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export default function Root() {
  const [drinks, setDrinks] = useState<DrinkProps[] | []>();
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
    <>
      <h1>Cocktail Search</h1>
      <form>
        <input
          aria-label="Search cocktails"
          placeholder="Search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={(event) => handleSubmit(event)}>submit</button>
      </form>
      {drinks?.map((drink, index) => (
        <Link to={`cocktails/${drink.idDrink}`} key={index}>
          {drink.strDrink}
          <img alt={drink.strDrink} src={`${drink.strDrinkThumb}/preview`} />
        </Link>
      ))}
    </>
  );
}
