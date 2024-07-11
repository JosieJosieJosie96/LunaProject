/* eslint-disable react/prop-types */

import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #f59e0b;
  border-top: 4px solid #f59e0b;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  min-width: 300px;
  max-width: 300px;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 320px;
`;

function RestaurantCard({ restaurants }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/restaurant/${id}`, {
      replace: true,
    });
  }

  return (
    <>
      {restaurants?.map((restaurant, index) => (
        <Fragment key={index}>
          {!restaurant.image ? null : (
            <div
              onClick={() => handleClick(restaurant.id)}
              style={{ cursor: 'pointer' }}
            >
              <Container>
                <Card>
                  <div
                    style={{
                      marginTop: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 24px',
                    }}
                  >
                    <div>
                      <h3>{restaurant.name}</h3>

                      <p>{restaurant.street}</p>
                      <div>%AVERAGE REVIEW% %REVIEWS%</div>
                    </div>
                  </div>
                  <ImageContainer>
                    <Image src={restaurant.image} alt="restaurant image" />
                  </ImageContainer>
                </Card>
              </Container>
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
}

export default RestaurantCard;
