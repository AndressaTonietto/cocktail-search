import { useParams } from 'react-router-dom';

export default function Cocktail() {
  const { cocktailId } = useParams();
  console.log({ cocktailId });

  return <div>cocktail details</div>;
}
