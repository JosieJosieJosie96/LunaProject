import {ContentContainer} from "../components/Profile.styled.js";

function ProfileReviews() {
    return(
    <>
<ContentContainer>
            <div className={'comments'}>
                <h3>Reviews</h3>
            </div>
            <div className={'review 1'}>
                <h3>Review 1</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>
            <div className={'review 2'}>
                <h3>Review 2</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>

        </ContentContainer>
        </>
        )}
export default ProfileReviews