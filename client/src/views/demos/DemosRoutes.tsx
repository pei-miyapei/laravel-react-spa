import { Route } from 'react-router-dom';
import { DemoEdit } from './demo/DemoEdit';

export const DemosRoutes = (
  <>
    <Route path='/demos/demo' element={<DemoEdit />} />
  </>
);
