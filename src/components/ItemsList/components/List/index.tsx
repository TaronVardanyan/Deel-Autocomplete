import { useCallback } from 'react';
import { AccountI } from '../../../../utils';
import { highlightMatch } from '../../../../helpers';
import './List.css';

interface Props {
  accountsArray: AccountI[];
  searchedValue: string;
}

const List = ({ accountsArray, searchedValue }: Props) => {
  const getHighlight = useCallback(
    (text: string) => {
      return '@' + highlightMatch(text, searchedValue);
    },
    [searchedValue]
  );

  return (
    <ul className="list">
      {accountsArray.map((account) => (
        <li className="account-tile" key={account.id}>
          <div className="account-info">
            <img src={account.avatar_url} alt="Account avatar" loading="lazy" />
            <h4 dangerouslySetInnerHTML={{ __html: getHighlight(account.login) }} />
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
