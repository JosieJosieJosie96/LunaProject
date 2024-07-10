import { useState } from 'react';
import WriteReview from '../components/WriteReview';
import {
  ContainerAll,
  HeroContainer,
  HeroImage,
  Input,
} from '../components/HeroHeader';
import { Button } from '../../ui/Button';
import RestaurantPageReviewCard from '../components/RestaurantPageReviewCard';

function RestaurantPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [isReviewButtonClicked, setIsReviewButtonClicked] = useState(false);
  return (
    <>
      <HeroContainer>
        <HeroImage src="/Users/emirmurati/Downloads/restaurant.jpeg" />

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
      </HeroContainer>
      {isReviewButtonClicked ? (
        <WriteReview setIsReviewButtonClicked={setIsReviewButtonClicked} />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
          className="mt-8 flex justify-center"
        >
          <div
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-between',
              gap: '40px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: '50%' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <div style={{ display: 'flex' }}>
                      <Input type="text" placeholder="Filter" />
                      <Button>FILTER</Button>
                    </div>
                  </div>
                </div>
                <RestaurantPageReviewCard
                  setIsClicked={setIsClicked}
                  isClicked={isClicked}
                />
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <div
                style={{
                  display: 'flex',
                  border: '1px solid black',
                  paddingBottom: '12px',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{ paddingRight: '12px' }}
                  src="src/assets/svg/clock.svg"
                />
                <p>%OPENING HOURS%</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  paddingBottom: '14px',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{ paddingRight: '12px' }}
                  src="src/assets/svg/money.svg"
                  className="pr-3"
                />
                <p>%PRICE LEVEL%</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '7px',
                  paddingTop: '20px',
                }}
              >
                <Button
                  onClick={() => setIsReviewButtonClicked((prev) => !prev)}
                >
                  WRITE A REVIEW
                </Button>
                <Button>EDIT DATA</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantPage;
