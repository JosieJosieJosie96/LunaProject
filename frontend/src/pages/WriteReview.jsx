import {Button} from "../../ui/Button.jsx";
import { useForm } from 'react-hook-form';

import {LargeInput} from "../components/Profile.styled.js";

function WriteReview() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <p>Select your rating</p>
      {/* Add your star rating component here */}

      <div style={{ marginTop: '40px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LargeInput
            htmlFor="review"
            type="text"
            register={register}
            name="review"
            placeholder="Your review helps others learn about great local businesses.

            Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
          />
          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}

export default WriteReview;

