import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from '../views/About';
import { Home } from '../views/Home';
import { Layout } from '../views/Layout';
import { NotFound } from '../views/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
