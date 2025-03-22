import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
// import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';
import Header from '../components/Header/Header';

const Home = () => {
  const [country, setContry] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getCountries();
        setContry(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadCountry();
  }, []);

  console.log(country);
  return (
    <Section>
      <Container>
        <Header />
        {error && <p>An error occurred, please reload the page.</p>}
        {isLoading && <Loader />}
        {country.length > 0 && <CountryList country={country} />}
      </Container>
    </Section>
  );
};
export default Home;
