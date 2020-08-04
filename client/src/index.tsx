import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux/root.reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './redux/root.saga';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './theme';

// Setup redux store and add persistence so we can rehydrate from local storage
const rootPersistConfig = {
  key: 'root',
  storage,
};

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Set up Redux dev tools
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={Theme}>
        <React.StrictMode>
          <App />
          <GlobalStyle />
        </React.StrictMode>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
