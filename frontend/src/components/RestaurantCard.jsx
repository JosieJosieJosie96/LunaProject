import axios from 'axios';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

export const Card = styled.div`
    border: 1px solid #EBEBEB;
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

function RestaurantCard({restaurants}) {
    return (
        <div>
            <Container>
                {/* {restaurants.map(restaurant => )} */}
                <Card>
                    <div
                        style={{
                            marginTop: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingLeft: '14px',
                            paddingBottom: '15px',
                        }}
                    >
                        <div>
                            <h3>%RESTAURANT NAME%</h3>

                            <p>%RESTAURANT STREET%</p>
                            <div>%AVERAGE REVIEW% %REVIEWS%</div>
                        </div>
                    </div>
                    <ImageContainer>
                        <Image
                            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-reneterp-1581384.jpg&fm=jpg"/>
                    </ImageContainer>
                </Card>
            </Container>
        </div>
    );
}

export default RestaurantCard;
