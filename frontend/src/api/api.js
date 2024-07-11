import axios from 'axios';

export const getUsers = async (setUsers) => {
  const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/users/list/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

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
      `https://luna1.propulsion-learn.ch/backend/api/restaurants/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setRestaurants(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (setReviews) => {
  const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/reviews/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    setReviews(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRestaurantByID = async (setRestaurantData, id) => {
  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/restaurants/${id}/`,
    );

    setRestaurantData(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
