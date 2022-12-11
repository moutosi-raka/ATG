import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserHomePage from './pages/UserHomePage/UserHomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/user',
      element: <UserHomePage></UserHomePage>
    }
  ])
  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}

export default App;
