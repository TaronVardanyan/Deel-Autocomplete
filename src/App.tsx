import { lazy, useState } from 'react';
import { AutoCompleteInput } from './components';
import './App.css';

const ItemsList = lazy(() => import('./components/ItemsList'));

function App() {
  //setting loading state for client interface response visibility
  const [isLoading, setLoadingState] = useState(false);

  const handleUsername = (username: string) => {
    if (username?.length) {
      //call request api when username string has length

      //set loading true on new username enter
      setLoadingState(true);
    } else {
      setLoadingState(false);
    }
  };

  return (
    <div className="App">
      <AutoCompleteInput handleUsername={handleUsername} isLoading={isLoading} />
      <ItemsList />
    </div>
  );
}

export default App;
