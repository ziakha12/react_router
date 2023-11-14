import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './componenets/Layout';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import User from './componenets/User/User';
import Github from './componenets/Github/Github';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>

      },
      {
        path : "about",
        element : <About/>

      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "user/:userid",
        element: <User/>
      },
      {
        path : "github",
        element: <Github/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
