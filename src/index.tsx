import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import Cocktail from './routes/cocktail';
import NotFound from './components/NotFound';
import List from './routes/list';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Root />}
        children={[
          <Route path="search" element={<List />} />,
          <Route path="cocktails/:cocktailId" element={<Cocktail />} />,
        ]}
      />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
