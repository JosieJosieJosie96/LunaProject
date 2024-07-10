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
import styled from 'styled-components';

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
  const [isClicked, setIsClicked] = useState(false);
  const [isReviewButtonClicked, setIsReviewButtonClicked] = useState(false);
  return (
    <>
      <HeroContainer>
        <HeroImage src="" />

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
          <h2>%RESTAURANT NAME%</h2>
          <p>%RESTAURANT PRODUCT%</p>
          <div>
            <p>%STAR% </p>
            <p>%NUMBER REVIEWS% reviews</p>
          </div>
        </HeroTextContainer>
      </HeroContainer>
      {isReviewButtonClicked ? (
        <WriteReview setIsReviewButtonClicked={setIsReviewButtonClicked} />
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
                  <RestaurantPageReviewCard
                    setIsClicked={setIsClicked}
                    isClicked={isClicked}
                  />
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.105)',
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
        </div>
      )}
    </>
  );
}

export default RestaurantPage;
