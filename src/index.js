import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Styles and components
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './features/header/Header';
import { Footer } from './features/footer/Footer';
import { About } from './features/about/About';
// Redux
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route active path="/" element={<App />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();