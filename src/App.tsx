import React from 'react';
import { Provider } from 'react-redux'
import StackNavigation from './Navigations/StackNavigation';
import store from './Store';
import ErrorBoundary from './Components/ErrorBoundry';

export default function App() {
  return (
    <Provider store={store}>
        <ErrorBoundary>
          <StackNavigation />
        </ErrorBoundary>
    </Provider>
  );
}