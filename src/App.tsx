import React, { lazy } from 'react';
import { AutoCompleteInput } from './components';
import './App.css';

const ItemsList = lazy(() => import('./components/ItemsList'));

function App() {
  return (
    <div className="App">
      <AutoCompleteInput />
      <ItemsList />
    </div>
  );
}

export default App;
