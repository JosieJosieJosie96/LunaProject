import ReviewCard from '../components/ReviewCard';
import UserCard from '../components/UserCard';
import RestaurantCard from '../components/RestaurantCard';
import { useState } from 'react';
import styled from 'styled-components';
import { CardContainer } from './Home';

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  /* gap: 3rem; */
  width: 100%;
  height: 36px;
  border: 1px solid #05050513;
  padding: 8px 0;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;

  padding-left: 33px;
  border: none;

  background-color: white;

  font-size: 24px;
`;

const TextContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 34px;
  margin-bottom: 100px;

  button {
    font-size: 30px;
    background-color: inherit;
    border: none;
    border-bottom: orange;
    cursor: pointer;
  }
`;

function Search() {
  const [currentPage, setCurrentPage] = useState(<RestaurantCard />);

  return (
    <div>
      <InputContainer>
        <Input type="text" placeholder="Search..." />

        <select
          style={{
            width: '20%',
            height: '100%',
            border: 'none',
            fontSize: '20px',
            color: 'gray',
          }}
        >
          <option>Select a category</option>
        </select>
      </InputContainer>
      <TextContainer>
        <button onClick={() => setCurrentPage(<RestaurantCard />)}>
          RESTAURANTS
        </button>

        <button onClick={() => setCurrentPage(<ReviewCard />)}>REVIEWS</button>
        <button onClick={() => setCurrentPage(<UserCard />)}>USERS</button>
      </TextContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardContainer>
          {currentPage}
          {currentPage}
          {currentPage}
          {currentPage}
        </CardContainer>
      </div>
    </div>
  );
}

export default Search;
