import {Button} from "../../ui/Button.jsx";
import { useState } from 'react';

import {FormContainer, LeftText, TextArea,} from "../components/LargeInput.js";

// eslint-disable-next-line react/prop-types
const WriteReview = ({ onSubmit }) => {
  const [reviewContent, setReviewContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(Review.text_content);
    setReviewContent('');
  };

  const handleChange = (e) => {
    setReviewContent(e.target.value);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="Your review helps others learn about great local businesses.
Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
          value={reviewContent}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit Review</Button>
      </form>
      <LeftText>This field is required</LeftText>
    </FormContainer>

  );
};

export default WriteReview;

