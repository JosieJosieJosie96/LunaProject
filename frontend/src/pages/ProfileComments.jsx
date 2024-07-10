
import { ContentContainer, SelectionContainer } from "../components/Profile.styled.js";

function ProfileComments() {
  return (
    <ContentContainer>
      <div className={'comments'}>
        <h3>Comments</h3>
      </div>
      <SelectionContainer>
        <h3>Review 1</h3>
        {/*<p>{userdata.comments}</p>*/}
      </SelectionContainer>
      <SelectionContainer>
        <h3>Review 2</h3>
        {/*<p>{userdata.comments}</p>*/}
      </SelectionContainer>
    </ContentContainer>
  );
}

export default ProfileComments;
