import { AccountI } from '../../utils';
import EmptyResult from './components/EmptyResult';
import List from './components/List';
import './ItemsList.css';

interface Props {
  accounts: Array<AccountI>;
  searchedValue: string;
}

const ItemsList = ({ accounts, searchedValue }: Props) => {
  return (
    <div className="items-list">
      {accounts.length ? (
        <List accountsArray={accounts} searchedValue={searchedValue} />
      ) : (
        <EmptyResult />
      )}
    </div>
  );
};

export default ItemsList;
