import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils';
import {Provider} from 'react-redux'
import store  from './reducers';
import {Routes} from './Routes';


ReactDOM.render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA   <React.StrictMode></React.StrictMode>

serviceWorker.unregister();
