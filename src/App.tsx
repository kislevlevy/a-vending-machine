// Imports:
import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Pages:
import Root from './layout/Root';
import Home from './pages/Home';

// Lazy Pages:
const About = lazy(() => import('./pages/About'));
const Error = lazy(() => import('./pages/Error'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Product = lazy(() => import('./pages/Product'));

// App:
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="קטלוג-מכונות">
          <Route index element={<Catalog />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="צור-קשר" element={<ContactUs />} />
        <Route path="אודות" element={<About />} />
      </Route>
    ),
    { basename: import.meta.env.VITE_BASE_URL || '/' }
  );
  return <RouterProvider router={router} />;
}
