import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #f59e0b;
  border-top: 4px solid #f59e0b;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  min-width: 300px;
  max-width: 300px;
`;

export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  width: 100&;

  /* padding-left: 12px;
  padding-right: 12px; */
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

function RestaurantCard() {
  return (
    <div>
      <Container>
        <Card>
          <div
            style={{
              marginTop: '4px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>%RESTAURANT NAME%</h3>

              <p>%RESTAURANT STREET%</p>
              <div>%AVERAGE REVIEW% %REVIEWS%</div>
            </div>
          </div>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-reneterp-1581384.jpg&fm=jpg" />
          </ImageContainer>
        </Card>
      </Container>
    </div>
  );
}

export default RestaurantCard;
