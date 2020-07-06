import React from 'react';
import ReactDOM from 'react-dom';
import "leaflet/dist/leaflet.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { store, persistor } from "./redux/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render(
  <App />,
  document.getElementById("root"));
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
