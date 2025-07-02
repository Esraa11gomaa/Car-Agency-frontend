import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
import WishList from './components/WishList/WishList';
import UserContextProvider from './Context/UserContext'
import SignOut from './components/signOut/signOut';


let Routing = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "signout", element: <SignOut /> },
      { path: "category", element: <Category /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <WishList /> },
      { path: "*", element: <Notfound /> }
    ]
  }
])

function App() {

  return <UserContextProvider>
    <RouterProvider router={Routing}></RouterProvider>
  </UserContextProvider>

}

export default App
