import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MainContainer,
  ProfileLeftContainer,
  RightContainer,
  TopMiddleContainer,
  Paragraph,
  SelectionContainer,
} from '../components/Profile.styled.js';
import HeaderProfile from '../components/HeaderProfile.jsx';
import ProfileComments from './ProfileComments';
import ProfileReviews from './ProfileReviews';
import ProfileRestaurants from './ProfileRestaurants';
import EditProfile from './EditProfile';
import Avatar from '../assets/svg/avatar.jpeg';

function ProfileBase() {
  const token = localStorage.getItem('token');
  const [currentSection, setCurrentSection] = useState('reviews');
  const [userData, setUserData] = useState([]);

  // const [error, setError] = useState(null);
  const GetMe = async () => {
    // const token = window.localStorage.getItem('token');

    try {
      const res = await axios.get(
        'https://luna1.propulsion-learn.ch/backend/api/users/me/',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setUserData(res.data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCurrentSection('reviews');
    GetMe();
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'comments':
        return <ProfileComments />;
      case 'reviews':
        return <ProfileReviews />;
      case 'restaurants':
        return <ProfileRestaurants />;
      case 'editProfile':
        return <EditProfile />;
      default:
        return <ProfileComments />;
    }
  };

  // if (error) {
  //   return <div>Error loading user data</div>;
  // }
  console.log(userData);

  return (
    <>
      <HeaderProfile />
      <MainContainer>
        <ProfileLeftContainer>
          <div className={'profileimage'}>
            <img
              src={
                !userData?.profile_picture
                  ? `${Avatar}`
                  : userData?.profile_picture
              }
            />
          </div>
          <h3>{userData?.first_name}s profile</h3>
          <SelectionContainer onClick={() => setCurrentSection('reviews')}>
            <h3>Reviews</h3>
            <img src={'frontend/src/assets/svg/star.svg'} alt={'reviews'} />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('comments')}>
            <h3>Comments</h3>
            <img src={'frontend/src/assets/svg/comment.svg'} alt={'comment'} />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('restaurants')}>
            <h3>Restaurants</h3>
            <img
              src={'frontend/src/assets/svg/restaurant.svg'}
              alt={'restaurant'}
            />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('editProfile')}>
            <h3>Edit Profile</h3>
            <img src={'frontend/src/assets/svg/edit.svg'} alt={'edit'} />
          </SelectionContainer>
        </ProfileLeftContainer>

        <div>{renderSection()}</div>

        <RightContainer>
          <h3>About {userData?.first_name}</h3>
          <div className={'location2'}>
            <h3>Location</h3>
            <p>{userData?.location}</p>
          </div>
          <div className={'review 1'}>
            <h3>Luna member since</h3>
            <p>{new Date(userData?.created).toLocaleDateString()}</p>
          </div>
          <div className={'things I love'}>
            <h3>Things I love</h3>
            <p>{userData?.things_i_love}</p>
          </div>
          <div className={'description'}>
            <h3>Description</h3>
            <p>{userData?.description}</p>
          </div>
        </RightContainer>

        <TopMiddleContainer>
          <div className={'name'}>
            <div>{userData?.first_name}</div>
          </div>
          <div className={'location'}>
            <p>{userData?.location}</p>
          </div>
          <div className={'reviews'}>
            <p>{userData?.reviews} reviews</p>
          </div>
          <div className={'comments'}>
            <p>{userData?.comments} comments</p>
          </div>
        </TopMiddleContainer>
      </MainContainer>
    </>
  );
}

export default ProfileBase;
