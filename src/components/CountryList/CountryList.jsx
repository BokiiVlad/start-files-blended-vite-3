import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link } from 'react-router-dom';

const CountryList = ({ country }) => {
  console.log(country);
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {country.map(el => (
          <GridItem key={el.id}>
            <Link to={`/country/${el.id}`}>
              <img src={el.flag} alt={el.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default CountryList;
