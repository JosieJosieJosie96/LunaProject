import HeroHeader from '../components/HeroHeader';
import { HeadingForm } from '../../ui/HeadingForm';
import RestaurantCard from '../components/RestaurantCard';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-content: center;
  justify-items: center;
  row-gap: 30px;
  /* column-gap: 12px; */
  width: 80%;
`;

function Home() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '34px',
      }}
    >
      <HeroHeader />
      <div
        style={{
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <HeadingForm
          style={{
            marginTop: '0px',
          }}
        >
          BEST RATED RESTAURANTS
        </HeadingForm>
      </div>

      <CardContainer>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </CardContainer>
    </div>
  );
}

export default Home;
