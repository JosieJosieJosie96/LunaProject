import {Button} from "../../ui/Button.jsx";
import { useState } from 'react';
import PropTypes from 'prop-types';
import {FormContainer, TextArea,} from "../components/LargeInput.js";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const WriteReview =
({ restaurantId }) => {
  const [reviewContent, setReviewContent] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/reviews/new/${restaurantId}/`,
        {
          content: reviewContent,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setSuccessMessage('Review submitted successfully!', response.data);
      setReviewContent(''); // Clear textarea after submission
    } catch (error) {
      setError('Error submitting review');
    }
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <Button type="submit">Submit Review</Button>
      </form>
    </FormContainer>
  );
};
WriteReview.propTypes = {
  restaurantId: PropTypes.number.isRequired,
};
export default WriteReview;
