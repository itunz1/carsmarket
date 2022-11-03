import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import axios from "axios";
import store from "./Redux/Store.js";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById('root');
const root = createRoot(container);
///aca se estable el localhost que va tener
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-of83hzntjzd33vh8.us.auth0.com" clientId="JZXErkOjiunyzXobpg4aQ1pesJBlo6wI" redirectUri={window.location.origin + "/createuser"} >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

