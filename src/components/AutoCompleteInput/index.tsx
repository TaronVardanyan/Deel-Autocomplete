import { ChangeEvent, useState, useEffect } from 'react';
import { useDebounce } from '../../hooks';
import { LoadingIcon } from '../../icons';
import { DEBOUNCE_DEFAULT } from '../../utils';
import './AutoCompleteInput.css';

interface Props {
  isLoading: boolean;
  handleUsername: (username: string) => void;
}

const AutoCompleteInput = ({ handleUsername, isLoading }: Props) => {
  //saving input value in local state
  const [inputValue, setInputValue] = useState('');
  //passing updated state to debounce custom hook
  const enteredValue = useDebounce(inputValue, DEBOUNCE_DEFAULT);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    //setting a new updated value to local state
    setInputValue(event.target.value);
  };

  useEffect(() => {
    //detecting a change of input state and passing updated value to parent component with callback
    handleUsername(enteredValue);
  }, [enteredValue]);

  return (
    <div className="input-wrapper">
      <input
        value={inputValue}
        type="text"
        placeholder="Search here"
        onChange={handleValueChange}
      />
      {isLoading && <LoadingIcon />}
    </div>
  );
};

export default AutoCompleteInput;
