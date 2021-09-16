import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style-scss/style.scss";
import {Provider} from "react-redux";
import {store} from "./store/store";
import ThemeProvider from "./Context/ContextProvider";

ReactDOM.render(
  <Provider store={store}>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);


