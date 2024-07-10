import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Paragraph,
  EditContainer
} from "../components/Profile.styled.js";
import Input from "../components/Input.jsx";
import { Button } from "../../ui/Button.jsx";

function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
    thingsILove: '',
    description: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/backend/api/users/me/');
        setFormData({
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          location: response.data.location,
          phone: response.data.phone,
          thingsILove: response.data.thingsILove,
          description: response.data.description
        });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch("http://localhost:8000/backend/api/users/me/", formData);
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <EditContainer>
      <form onSubmit={handleSubmit}>
        <Paragraph>Username</Paragraph>
        <Input
          htmlFor="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Paragraph>First Name</Paragraph>
        <Input
          htmlFor="first-name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Paragraph>Last Name</Paragraph>
        <Input
          htmlFor="last-name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Paragraph>Location</Paragraph>
        <Input
          htmlFor="location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <Paragraph>Phone</Paragraph>
        <Input
          htmlFor="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Paragraph>Things I Love</Paragraph>
        <Input
          htmlFor="thingsILove"
          type="text"
          name="thingsILove"
          value={formData.thingsILove}
          onChange={handleChange}
        />
        <Paragraph>Description</Paragraph>
        <Input
          htmlFor="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <div>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </EditContainer>
  );
}

export default EditProfile;
