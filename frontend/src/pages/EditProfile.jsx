import {


    Paragraph, EditContainer
} from "../components/Profile.styled.js";
import Input from "../components/Input.jsx";
import {Button} from "../../ui/Button.jsx";




function EditProfile() {


    <EditContainer>
        <form>
            <Paragraph>Username</Paragraph>
            <Input htmlFor="username" type="text" /*register={register}*/ name="username">
<Paragraph>First Name</Paragraph>
            <Input htmlFor="first-name" type="text" /*register={register}*/ name="first-name">

            </Input>
                <Paragraph>Last Name</Paragraph>
            <Input htmlFor="last-name" type="text" /*register={register}*/ name="last-name">

            </Input>
            </Input>
            <Paragraph>Location</Paragraph>
            <Input htmlFor="location" type="text" /*register={register}*/ name="location">
            </Input>
<Paragraph>Phone</Paragraph>
            <Input htmlFor="phone" type="text" /*register={register}*/ name="phone">
            </Input>
            <Paragraph>Things I love</Paragraph>
            <Input htmlFor="ThingsIlove" type="text" /*register={register}*/ name="ThingsIlove">
            </Input>
            <Paragraph>Description</Paragraph>
            <Input htmlFor="description" type="text" /*register={register}*/ name="description">
            </Input>


            <div>
                <Button>Save</Button>
            </div>
        </form>
    </EditContainer>}



export default EditProfile;