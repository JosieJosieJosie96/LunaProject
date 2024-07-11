import {useEffect, useState} from 'react';
import WriteReview from '../components/WriteReview';
import {
    ContainerAll,
    HeroContainer,
    HeroImage,
    Input,
} from '../components/HeroHeader';
import {Button} from '../../ui/Button';
import RestaurantPageReviewCard from '../components/RestaurantPageReviewCard';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {getRestaurantByID} from '../api/api';

const HeroTextContainer = styled.div`
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);

    h2 {
        color: white;
    }

    p {
        color: white;
    }
`;

function RestaurantPage() {
    const params = useParams();
    const restaurantId = params.restaurantId;
    const [restaurantData, setRestaurantData] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isReviewButtonClicked, setIsReviewButtonClicked] = useState(false);

    useEffect(() => {
        getRestaurantByID(setRestaurantData, restaurantId);
    }, []);

    return (
        <>
            <HeroContainer>
                <HeroImage src={restaurantData?.image}/>

        <ContainerAll>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '672px',
            }}
          ></div>
          <div
            style={{
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '672px',
            }}
          ></div>
        </ContainerAll>
        <HeroTextContainer>
          <h2>{restaurantData?.name}</h2>
          <p>{restaurantData?.category}</p>
          <div>
            <p>%STAR% </p>
            <p>%NUMBER REVIEWS% reviews</p>
          </div>
        </HeroTextContainer>
      </HeroContainer>
      {isReviewButtonClicked ? (
        <WriteReview
          restaurantId={restaurantId}
          setIsReviewButtonClicked={setIsReviewButtonClicked}
        />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div
            style={{
              display: 'flex',

              width: '60%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '120px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: 'white',
                  padding: '24px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Input
                          style={{
                            width: '80%',
                            border: '1px solid rgba(0, 0, 0, 0.105)',
                          }}
                          type="text"
                          placeholder="Filter"
                        />
                        <Button style={{ width: '20%' }}>FILTER</Button>
                      </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RestaurantPage;
