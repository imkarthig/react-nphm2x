import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  Navbar from './pages/Navbar.jsx';
import { Main } from './pages/Main.jsx';
import { Provider } from 'react-redux';
// import store from './store/store.jsx';
import {store} from './store/store.jsx';
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter> 
          <Navbar />
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
