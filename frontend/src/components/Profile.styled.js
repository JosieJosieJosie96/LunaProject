import styled from "styled-components";
// import {ProfileLeftContainer} from "../pages/ProfileComments.jsx";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
    position: relative;
    top: 60px;
`;
export const CommentsContainer = styled.div`

      width: 587px;
  height: 148px;
    display: grid;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;

`
export const TopContainer = styled.div`
    display: grid;
  justify-content: center;
  align-items: start;
  width: 100%;
  //position: absolute;

      padding: 10px; /* For spacing */
  z-index: 10; /* Ensure it's on top */

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
    top: 60px;
  //  border-bottom: 1px solid #979797;
  //  padding-bottom: 10px;
  //}`

    
export const Paragraph = styled.p`
  margin: 0 10px; /* Adjust spacing between paragraphs */
`

export const RightContainer = styled.div`
  position: absolute;
  right: 0;
    top: 60px;
`

export const SelectionContainer = styled.div`
border-bottom: 2px solid grey;
    
`
export const EditContainer = styled.div`
    
    `
