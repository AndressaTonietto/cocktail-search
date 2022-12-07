import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Cocktail Search</h1>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search cocktails"
            placeholder="Search"
            type="search"
            name="q"
          />
        </form>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
