import styled from 'styled-components';
import { Card, Container } from './RestaurantCard';

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

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;

  button {
    padding: 6px 12px;
    border: none;
    background-color: #989898;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #757575;
      transform: scale(0.96);
    }
  }
`;

function ReviewCard() {
  return (
    <div>
      <Container>
        <Card>
          <div>
            <div
              style={{
                display: 'flex',
                borderBottom: '1px solid gray',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <ImageContainer>
                <Image src="frontend/src/assets/img/244b33a5c8d738c298296d73d0d840348799e37f.png" />
              </ImageContainer>
              <div>
                <div>
                  <h3 style={{ color: 'orange' }}>%USER FIRST NAME%</h3>
                  <p>Total Reviews</p>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ marginTop: '4px', color: 'orange' }}>
                %RESTAURANT NAME %
              </p>
              <p style={{ marginBottom: '8px' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio totam obcaecati doloremque ipsam. Iusto quisquam
                dolores, explicabo sed soluta nostrum dolor ratione omnis
                corrupti ea!
              </p>
              <Flex>
                <button>
                  {/* <img src="src/assets/svg/money.svg" /> */}
                  <span>%REVIEW LIKES% Like</span>
                </button>

                <button>Comment</button>
              </Flex>

              <p style={{ fontSize: '20px' }}>Latest Comments</p>
              <p style={{ color: 'orange' }}>Cristiano Ronaldo</p>
              <p>I love it</p>
              <p style={{ color: 'orange' }}>Ruben Villalon</p>
              <p>Crazyyyy</p>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ReviewCard;
