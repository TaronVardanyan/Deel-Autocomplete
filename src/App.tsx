import { lazy, useState } from 'react';
import { Welcome } from './components';
import { BASE_URL, AccountI } from './utils';
import './App.css';

const ItemsList = lazy(() => import('./components/ItemsList'));
const AutoCompleteInput = lazy(() => import('./components/AutoCompleteInput'));

function App() {
  //setting loading state for client interface response visibility
  const [isLoading, setLoadingState] = useState(false);
  //list of accounts matchet with search value
  const [accounts, setAccountsData] = useState<AccountI[] | null>(null);

  const handleFetch = async (username: string) => {
    try {
      const response = await fetch(BASE_URL + username);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      //turn off loading
      setLoadingState(false);
      // setting the response data
      setAccountsData(data.items);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
      setLoadingState(false);
    }
  };

  const handleUsername = (username: string) => {
    if (username?.length) {
      //call request api when username string has length

      //set loading true on new username enter
      setLoadingState(true);

      //call of fetch function to get all variants of usernames
      handleFetch(username);
    } else {
      setLoadingState(false);
      setAccountsData(null);
    }
  };

  return (
    <div className="App">
      <AutoCompleteInput handleUsername={handleUsername} isLoading={isLoading} />
      {accounts ? <ItemsList accounts={accounts} /> : <Welcome />}
    </div>
  );
}

export default App;
