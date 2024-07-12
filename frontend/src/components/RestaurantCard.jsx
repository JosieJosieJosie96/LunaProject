/* eslint-disable react/prop-types */

import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ebebeb;
  border-top: 7px solid #f59e0b;
  min-width: 270px;
  max-width: 270px;
  background-color: white;
  border-radius: 5px;
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
  height: 260px;
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
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '20px',
                            color: '#4C4C4C',
                          }}
                        >
                          21
                        </div>
                      </div>
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
