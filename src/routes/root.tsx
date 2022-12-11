import { useState } from 'react';
import CocktailList from '../components/CocktailList';
import CocktailSearch from '../components/CocktailSearch';

export default function Root() {
  const [drinks, setDrinks] = useState<CocktailProps[] | []>([]);

  return (
    <>
      <CocktailSearch setDrinks={setDrinks} />
      <CocktailList drinks={drinks} />
    </>
  );
}
