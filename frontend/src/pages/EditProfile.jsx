import {

    MainContainer,
    ProfileLeftContainer,
    RightContainer,
    TopContainer,
    Paragraph, SelectionContainer, EditContainer
} from "../components/Profile.styled.js";




function Profile() {
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
                <img src={'path/to/profile-image.jpg'} alt="Profile"/>
            </div>

            <SelectionContainer>
                <h3>Reviews</h3>

            </SelectionContainer>
            <SelectionContainer>
                <h3>Comments</h3>
            </SelectionContainer>
            <SelectionContainer>
                <h3>Restaurants</h3>

            </SelectionContainer>
            <SelectionContainer>
                <h3>Edit Profile</h3>

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

<EditContainer>

</EditContainer>

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


export default Profile;