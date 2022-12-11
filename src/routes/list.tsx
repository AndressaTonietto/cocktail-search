import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import api from '../services/api';

export default function List() {
  const [searchParams] = useSearchParams();
  const [drinks, setDrinks] = useState<CocktailProps[] | []>();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const url = `search.php?s=${searchParams.get('query')}`;
        const res = await api.get(url);
        setDrinks(res.data.drinks);
      } catch (e) {
        console.log(e);
      }
    };
    handleSubmit();
  }, [searchParams]);

  return <CocktailList drinks={drinks} />;
}
