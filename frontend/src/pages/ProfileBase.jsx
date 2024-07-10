import {useState} from 'react';
import {
  MainContainer,
  ProfileLeftContainer,
  RightContainer,
  TopMiddleContainer,
  Paragraph,
  SelectionContainer,
    GreyBackground,
} from "../components/Profile.styled.js";
import HeaderProfile from "../components/HeaderProfile.jsx";
import ProfileComments from './ProfileComments';
import ProfileReviews from './ProfileReviews';
import ProfileRestaurants from './ProfileRestaurants';
import EditProfile from './EditProfile';




function ProfileBase() {
  const [currentSection, setCurrentSection] = useState('editProfile');

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

  return (
    <>
      <HeaderProfile>
        </HeaderProfile>
      <MainContainer>

        <ProfileLeftContainer>
          <div className={'profileimage'}>
            <img src={'path/to/profile-image.jpg'} alt="ProfileBase" />
          </div>
          {/*<h3>{userdata.name}'s profile</h3>*/}
          <SelectionContainer onClick={() => setCurrentSection('reviews')}>
            <h3>Reviews</h3>
            <img src={"../assets/svg/star.svg"} alt={"reviews"} />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('comments')}>
            <h3>Comments</h3>
            <img src={"../assets/svg/comment.svg"} alt={"comment"} />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('restaurants')}>
            <h3>Restaurants</h3>
            <img src={"../assets/svg/restaurant.svg"} alt={'restaurant'} />
          </SelectionContainer>
          <SelectionContainer onClick={() => setCurrentSection('editProfile')}>
            <h3>Edit Profile</h3>
            <img src={"../assets/svg/restaurant.svg"} alt={'edit'} />
          </SelectionContainer>
        </ProfileLeftContainer>




        <div>
          {renderSection()}
        </div>

        <RightContainer>
          {/*<h3>About {userdata.name}</h3>*/}
          <div className={'location2'}>
            <h3>Location</h3>
            {/*<p>{userdata.location}</p>*/}
          </div>
          <div className={'review 1'}>
            <h3>Luna member since</h3>
            {/*<p>{userdata.created}</p>*/}
          </div>
          <div className={'things I love'}>
            <h3>Things I love</h3>
            {/*<p>{userdata.likes}</p>*/}
          </div>
          <div className={'description'}>
            <h3>Description</h3>
            {/*<p>{userdata.description}</p>*/}
          </div>
        </RightContainer>

                 <TopMiddleContainer>
            <div className={'name'}>
              <Paragraph>name</Paragraph>
              {/*<p>{userdata.name}</p>*/}
            </div>
            <div className={'location'}>
              <p>location</p>
              {/*<p>{userdata.location}</p>*/}
            </div>
            <div className={'reviews'}>
              <p>reviews</p>
              {/*<p>{userdata.reviews}</p>*/}
            </div>
            <div className={'comments'}>
              <p>comments</p>
              {/*<p>{userdata.comments}</p>*/}
            </div>
          </TopMiddleContainer>
      </MainContainer>
    </>
  );
}

export default ProfileBase;


