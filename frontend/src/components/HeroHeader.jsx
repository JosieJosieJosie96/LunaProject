import styled from 'styled-components';
import { Button } from '../../ui/Button';

export const HeroContainer = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: #111827;
  background-image: linear-gradient(black, black);
  padding: 96px 0;
  width: 100%;
  margin-bottom: 40px;
`;

export const HeroImage = styled.img`
  position: absolute;
  inset: 0px;
  z-index: 5;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right;
  opacity: 0.6;
`;

export const ContainerAll = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0 24px 0 24px;
`;

const InputDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  font-size: 30px;
  width: 100%;
`;

const Input = styled.input`
  height: 32px;
  width: 384px;
  border-radius: 6px;
  padding: 0 8px 0 8px;
  font-size: 16px;
`;

function HeroHeader() {
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
        <InputDiv>
          <div style={{ display: 'flex' }}>
            <Input type="text" placeholder="Search..." />
            <Button>Search</Button>
          </div>
        </InputDiv>
      </HeroContainer>
    </>
  );
}

export default HeroHeader;
