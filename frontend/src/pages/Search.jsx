import ReviewCard from '../components/ReviewCard';
import UserCard from '../components/UserCard';
import RestaurantCard from '../components/RestaurantCard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardContainer } from './Home';
import { getRestaurants, getUsers } from '../api/api';

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  border: 1px solid #05050513;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  padding-left: 33px;
  border: none;
  border-right: 1px solid #05050513;
  background-color: white;
  font-size: 19px;
`;

const TextContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-bottom: 68px;

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
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    getUsers(setUsers, token);
    getRestaurants(setRestaurant, token);
  }, []);

  return (
    <div>
      <InputContainer>
        <Input type="text" placeholder="Search..." />

        <select
          style={{
            width: '20%',
            height: '38px',
            border: 'none',
            fontSize: '20px',
            color: 'gray',
            padding: '0 15px',
          }}
        >
          <option>Select a category</option>
        </select>
      </InputContainer>
      <TextContainer>
        <button
          style={{
            borderBottom:
              currentPage.type.name === 'RestaurantCard'
                ? '2px solid orange'
                : '',
            color:
              currentPage.type.name === 'RestaurantCard' ? 'black' : 'gray',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => setCurrentPage(<RestaurantCard />)}
        >
          RESTAURANTS
        </button>

        <button
          style={{
            borderBottom:
              currentPage.type.name === 'ReviewCard' ? '2px solid orange' : '',
            color: currentPage.type.name === 'ReviewCard' ? 'black' : 'gray',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => setCurrentPage(<ReviewCard />)}
        >
          REVIEWS
        </button>
        <button
          style={{
            borderBottom:
              currentPage.type.name === 'UserCard' ? '2px solid orange' : '',
            color: currentPage.type.name === 'UserCard' ? 'black' : 'gray',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => setCurrentPage(<UserCard />)}
        >
          USERS
        </button>
      </TextContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {currentPage.type.name === 'UserCard' && (
          <CardContainer>
            <UserCard users={users} />
          </CardContainer>
        )}
        {currentPage.type.name === 'RestaurantCard' && (
          <CardContainer>
            <RestaurantCard restaurants={restaurants} />
          </CardContainer>
        )}
        {currentPage.type.name === 'ReviewCard' && (
          <CardContainer>
            <ReviewCard />
          </CardContainer>
        )}
      </div>
    </div>
  );
}

export default Search;

// const token = window.localStorage.getItem('token');

// const [isSuccess, setIsSuccess] = useState(false);
// const [errorMessage, setErrorMessage] = useState('');
// const [isLoading, setIsLoading] = useState(false);
// async function getUsers(setUsers) {
//   setIsLoading(true);
//   setErrorMessage('');

//   try {
//     const res = await axios.get(
//       `http://localhost:8000/backend/api/users/list/`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       },
//     );

//     setIsSuccess(true);
//     setIsLoading(false);
//     console.log(res.data);
//     setUsers(res.data);

//     return res.data;
//   } catch (error) {
//     console.log(error);
//     console.log(error);
//     setErrorMessage(error.response.data.email);
//     setIsSuccess(false);
//     setIsLoading(false);
//   }
// }
