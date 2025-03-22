import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import { useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
  const [selectContry, setSelectContry] = useState([]);

  const handleSubmit = async region => {
    const data = await fetchByRegion(region);
    setSelectContry(data);
  };
  console.log(selectContry);
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList country={selectContry} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
