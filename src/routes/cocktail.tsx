import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CocktailDetails from '../components/CocktailDetails';
import api from '../services/api';

export default function Cocktail() {
  const { cocktailId } = useParams();
  const [drink, setDrink] = useState<DetailedCocktailProps | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getCocktailDetails = async () => {
      setLoading(true);
      setErrorMessage('');

      try {
        const url = `lookup.php?i=${cocktailId}`;
        const res = await api.get(url);
        setDrink(res.data.drinks[0]);
      } catch (e) {
        setErrorMessage('Something went wrong. Try again');
      } finally {
        setLoading(false);
      }
    };

    getCocktailDetails();
  }, [cocktailId]);

  const getAllIngredients = () => {
    return Object.entries(drink || {})
      .filter((item) => item[0].includes('strIngredient') && item[1])
      .map((item) => item[1]);
  };

  return (
    <CocktailDetails
      drink={drink}
      ingredients={getAllIngredients()}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
}
