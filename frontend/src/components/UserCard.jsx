/* eslint-disable react/prop-types */
import styled from 'styled-components';
import {Card, Container} from './RestaurantCard';
import {Fragment} from 'react';

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
const ImageContainer = styled.div`
    height: 94px;
    width: 90px;
    overflow: hidden;
`;

function UserCard({users}) {
    return (
        <>
            {users?.map((user, index) => (
                <Fragment key={index}>
                    <div>
                        <Container>
                            <Card>
                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            borderBottom: '1px solid gray',
                                            alignItems: 'center',
                                            justifyContent: 'space-start',
                                        }}
                                    >
                                        <ImageContainer>
                                            <Image
                                                src="frontend/src/assets/img/244b33a5c8d738c298296d73d0d840348799e37f.png"/>
                                        </ImageContainer>

                                        <div style={{marginLeft: '14px'}}>
                                            <h3 style={{color: 'orange'}}>{user?.username}</h3>
                                            <p>Total Reviews</p>
                                        </div>
                                    </div>

                                    <p style={{marginBottom: '8px', padding: '8px'}}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Distinctio totam obcaecati doloremque ipsam. Iusto quisquam
                                        dolores, explicabo sed soluta nostrum dolor ratione omnis
                                        corrupti ea!
                                    </p>
                                </div>
                            </Card>
                        </Container>
                    </div>
                </Fragment>
            ))}
        </>
    );
}

export default UserCard;