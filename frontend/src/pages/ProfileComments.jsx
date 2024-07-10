// import { useParams } from 'react-router';
// import useAutoFetch from '../hooks/useAutoFetch.js';



// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setProfileFilter } from '../store/slices/profileFilter.js';

import {
    CommentsContainer,
    MainContainer,
    ProfileLeftContainer,
    RightContainer,
    TopContainer,
    Paragraph, SelectionContainer
} from "../components/Profile.styled.js";




function ProfileComments() {
  // const { profileId } = useParams()
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
<MainContainer>
          <div className={'banner-image'}>
          <img src={'path/to/profile-image.jpg'} alt="banner"/>
        </div>

        <ProfileLeftContainer>
            <div className={'profileimage'}>
                <img src={'path/to/profile-image.jpg'} alt="ProfileComments"/>
            </div>
{/*<h3>{userdata.name}'s profile</h3>*/}
            <SelectionContainer>
                <h3>Reviews</h3>
<img src={"../assets/svg/star.svg"} alt={"reviews"}/>
            </SelectionContainer>
            <SelectionContainer>
                <h3>Comments</h3>
                <img src={"../assets/svg/comment.svg"} alt={"comment"}/>
            </SelectionContainer>
            <SelectionContainer>
                <h3>Restaurants</h3>
                <img src={"../assets/svg/restaurant.svg"} alt={'restaurant'}/>
            </SelectionContainer>
            <SelectionContainer>
                <h3>Edit Profile</h3>
                <img src={"../assets/svg/restaurant.svg"} alt={'edit'}/>
            </SelectionContainer>


        </ProfileLeftContainer>
    <TopContainer>
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

</MainContainer>






    </>
        )
        {/*{error && <Header error />}*/}
    </>
  )
}


export default ProfileComments;
