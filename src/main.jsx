import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home/HomePage.jsx';
import RecipeListPage from './pages/recipe/RecipeListPage.jsx';
import PlanPage from './pages/plan/PlanPage.jsx';
import IngredientPage from './pages/ingredient/IngredientPage.jsx';
import ShoppingPage from './pages/shopping/ShoppingPage.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/recipe",
        element: <RecipeListPage />
      },
      {
        path: "/plan",
        element: <PlanPage />
      },
      {
        path: "/ingredient",
        element: <IngredientPage />
      },
      {
        path: "/shopping",
        element: <ShoppingPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
