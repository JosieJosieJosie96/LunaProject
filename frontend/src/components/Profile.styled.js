import styled from "styled-components";
// import {ProfileLeftContainer} from "../pages/Profile.jsx";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const CommentsContainer = styled.div`

      width: 587px;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;

`
export const TopContainer = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 40px;
`

export const ProfileLeftContainer = styled.div`
  width: 232px;
  height: 185px;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 21.09px;
  text-align: left;
  margin-top: 12px;
  margin-left: 68px;
  position: absolute;
  left: 0;
  //  .reviews, .comments, .restaurants, .editProfile {
  //  border-bottom: 1px solid #979797;
  //  padding-bottom: 10px;
  //}

    
`

export const RightContainer = styled.div`
  position: absolute;
  right: 0;
`