import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import api from '../services/api';

export default function List() {
  const [searchParams] = useSearchParams();
  const [drinks, setDrinks] = useState<CocktailProps[] | []>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const handleSubmit = async () => {
      setLoading(true);
      setErrorMessage('');

      try {
        const url = `search.php?s=${searchParams.get('query')}`;
        const res = await api.get(url);

        if (res.data.drinks === null) setErrorMessage('No drinks found');
        else setDrinks(res.data.drinks);
      } catch (e) {
        setErrorMessage('Something went wrong. Try again');
      } finally {
        setLoading(false);
      }
    };
    handleSubmit();
  }, [searchParams]);

  return (
    <CocktailList
      drinks={drinks}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
}
