import * as React from 'react';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import MainRoute from './routes/MainRoute';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
