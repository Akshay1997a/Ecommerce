import React from 'react';
import { Provider } from 'react-redux'
import StackNavigation from './Navigations/StackNavigation';
import store from './Store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}