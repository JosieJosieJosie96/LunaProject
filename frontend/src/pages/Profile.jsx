import { useParams } from 'react-router';
// import useAutoFetch from '../hooks/useAutoFetch.js';
import Header from '../components/Header.jsx';


// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setProfileFilter } from '../store/slices/profileFilter.js';
import Footer from "../components/Footer.jsx";
import {CommentsContainer, ProfileLeftContainer, RightContainer, TopContainer} from "../components/Profile.styled.js";




function Profile() {
  const { profileId } = useParams()
  // const params = useParams()
  // const endpointToFetch = profileId ? `users/${profileId}/` : 'users/me/'
  // const { data, error } = useAutoFetch('get', endpointToFetch, '', params)
  // const dispatch = useDispatch()

// useEffect(() => {
//   dispatch(setProfileFilter('posts'));
// }, [dispatch]);


  return (
    <>
      {/*{data && (*/}
        <>
          <Header /*userdata={data}*/ profileId={profileId} />
          <div className={'banner-image'}>
          <img src={'path/to/profile-image.jpg'} alt="Profile"/>
        </div>

        <ProfileLeftContainer>
            <div className={'profileimage'}>
                <img src={'path/to/profile-image.jpg'} alt="Profile"/>
            </div>

            <div className={"reviews"}>
                <h3>Reviews</h3>

            </div>
            <div className={'comments'}>
                <h3>Comments</h3>
            </div>
            <div className={'restaurants'}>
                <h3>Restaurants</h3>

            </div>
            <div className={'editProfile'}>
                <h3>Edit Profile</h3>

            </div>


        </ProfileLeftContainer>
        <TopContainer>
            <div className={'name'}>
                {/*<p>{userdata.name}</p>*/}
            </div>
            <div className={'location'}>
                {/*<p>{userdata.location}</p>*/}
            </div>
            <div className={'reviews'}>
                {/*<p>{userdata.reviews}</p>*/}
            </div>
            <div className={'comments'}>
                {/*<p>{userdata.comments}</p>*/}
            </div>


        </TopContainer>


        <CommentsContainer>
            <div className={'comments'}>
                <h3>Comments</h3>
            </div>
            <div className={'review 1'}>
                <h3>Review 1</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>
            <div className={'review 2'}>
                <h3>Review 2</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>

        </CommentsContainer>
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






        <Footer/>

    </>
        )
        {/*{error && <Header error />}*/}
    </>
  )
}


export default Profile;
