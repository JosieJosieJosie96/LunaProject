import {Button} from "../../ui/Button.jsx";
import {ContentContainer} from "../components/Profile.styled.js";

function ProfileRestaurants() {
    return(
        <>
            <ContentContainer>
                <div className={'comments'}>
                    <h3>Restaurants</h3>
                </div>
                <div className={'review 1'}>
                    {/*<p>{userdata.restaurants}</p>*/}
                    {/*<p>{userdata.restaurantsDescription}</p>*/}
                </div>


            </ContentContainer>
            <div>
                <Button>Create Restaurant</Button>
            </div>
        </>
    )
}


export default ProfileRestaurants