import { AccountI } from '../../utils';
import EmptyResult from './components/EmptyResult';
import List from './components/List';
import './ItemsList.css';

interface Props {
  accounts: Array<AccountI>;
}

const ItemsList = ({ accounts }: Props) => {
  return (
    <div className="items-list">
      {!!accounts.length ? <List accountsArray={accounts} /> : <EmptyResult />}
    </div>
  );
};

export default ItemsList;
