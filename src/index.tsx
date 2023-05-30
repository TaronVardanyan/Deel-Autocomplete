import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components';
import reportWebVitals from './reportWebVitals';
import './index.css';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
