import {Button} from "../../ui/Button.jsx";
import {ContentContainer, SelectionContainer} from "../components/Profile.styled.js";

function ProfileRestaurants() {
    return(
        <>
            <ContentContainer>

                    <h3>Restaurants</h3>

                <SelectionContainer>

                    {/*<p>{userdata.restaurants}</p>*/}
                    {/*<p>{userdata.restaurantsDescription}</p>*/}

                    </SelectionContainer>


            </ContentContainer>
            <div>
                <Button>Create Restaurant</Button>
            </div>
        </>
    )
}


export default ProfileRestaurants