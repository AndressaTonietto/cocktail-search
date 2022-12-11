import { Outlet } from 'react-router-dom';
import CocktailSearch from '../components/CocktailSearch';

export default function Root() {
  return (
    <>
      <CocktailSearch />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
