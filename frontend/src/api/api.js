import axios from 'axios';

export const getUsers = async (setUsers) => {
  const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `http://localhost:8000/backend/api/users/list/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    console.log(res.data);
    setUsers(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = async (setRestaurants) => {
  const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `http://localhost:8000/backend/api/restaurants/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    console.log(res.data);
    setRestaurants(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (setReviews) => {
  const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(`http://localhost:8000/backend/api/reviews/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(res.data);
    setReviews(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
