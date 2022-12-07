import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

type DrinkProps = {
  strDrink: string;
};

export default function Cocktail() {
  const { cocktailId } = useParams();

  const [drink, setDrink] = useState<DrinkProps | undefined>();

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        const url = `lookup.php?i=${cocktailId}`;
        const res = await api.get(url);

        setDrink(res.data.drinks[0]);
      } catch (e) {
        console.log(e);
      }
    };

    getCocktailDetails();
  }, [cocktailId]);

  return <div>{drink?.strDrink}</div>;
}
