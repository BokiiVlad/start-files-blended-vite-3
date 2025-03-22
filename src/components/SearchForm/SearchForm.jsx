import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';
import GoBackBtn from '../GoBackBtn/GoBackBtn.jsx';
import CountryList from '../CountryList/CountryList.jsx';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const [selectContry, setSelectContry] = useState();

  const handleSelect = event => {
    setSelectContry(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    onSubmit(selectContry);
  };

  return (
    <>
      <h2>SearchForm</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button className={styles.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <select
          aria-label="select"
          className={styles.select}
          name="region"
          required
          value={selectContry}
          onChange={handleSelect}
        >
          <option disabled value="default">
            Select a Region
          </option>
          {regions.map(el => (
            <option value={el.value} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default SearchForm;
