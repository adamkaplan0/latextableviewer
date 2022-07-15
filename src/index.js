import React from 'react';
import ReactDOM from 'react-dom/client';
// Styles and components
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();