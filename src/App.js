// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

class App extends Component {
  pageSize = 6;

  router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {
          path: '/',
          element: <News exact pageSize={this.pageSize} country="us" category="general" />
        },
        {
          path: '/general',
          element: <News exact pageSize={this.pageSize} country="us" category="general" key="general" />
        },
        {
          path: '/sports',
          element: <News exact pageSize={this.pageSize} country="us" category="sports" key="sports" />
        },
        {
          path: '/science',
          element: <News exact pageSize={this.pageSize} country="us" category="science" key="science" />
        },
        {
          path: '/business',
          element: <News exact pageSize={this.pageSize} country="us" category="business" key="business" />
        },
        {
          path: '/entertainment',
          element: <News exact pageSize={this.pageSize} country="us" category="entertainment" key="entertainment" />
        },
        {
          path: '/technology',
          element: <News exact pageSize={this.pageSize} country="us" category="technology" key="technology" />
        },
        {
          path: '/health',
          element: <News exact pageSize={this.pageSize} country="us" category="health" key="health" />
        }
      ]
    }
  ]);

  render() {

    return (
      <>
        <RouterProvider router={this.router} ></RouterProvider>
      </>
    )
  }
}


export default App;
