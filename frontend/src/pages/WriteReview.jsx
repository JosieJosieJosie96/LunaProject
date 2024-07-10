
import { useForm } from 'react-hook-form';
import Input from "../components/Input.jsx";

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
          <Input
            htmlFor="review"
            type="text"
            register={register}
            name="review"
            placeholder="Your review helps others learn about great local businesses.

            Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default WriteReview;

