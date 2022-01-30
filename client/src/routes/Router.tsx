import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from '../views/About';
import { AuthorizationCallback } from '../views/Auth/AuthorizationCallback';
import { DemosRoutes } from '../views/Demos/DemosRoutes';
import { Home } from '../views/Home';
import { MasterPage } from '../views/MasterPage';
import { NotFound } from '../views/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/callback' element={<AuthorizationCallback />} />
        <Route path='/' element={<MasterPage />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {DemosRoutes}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
