import { AccountI } from '../../../../utils';
import './List.css';

interface Props {
  accountsArray: AccountI[];
}

const List = ({ accountsArray }: Props) => {
  console.log(accountsArray, 666);
  return (
    <ul className="list">
      {accountsArray.map((account) => (
        <li className="account-tile" key={account.id}>
          <div className="account-info">
            <img src={account.avatar_url} alt="Account avatar" loading="lazy" />
            <h4>@{account.login}</h4>
          </div>
          <a href={account.html_url} target="_blank" rel="noreferrer">
            Go To Github Account
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
