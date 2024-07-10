/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Input } from './HeroHeader';
import { Button } from '../../ui/Button';

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  gap: 15px;
  color: white;
  &:hover {
    background-color: #b1b1b1;
    transform: scale(0.97);
  }
`;
const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const CommentsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 2px solid white;
  p {
    margin: 0;
    color: orange;
    font-size: 20px;
  }
  span {
    color: #232323;
    font-size: 18px;
  }
`;

function RestaurantPageReviewCard({ setIsClicked, isClicked }) {
  return (
    <div
      style={{ width: '100%', marginTop: '30px', border: '1px solid black' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          <div style={{ width: '112px', overflow: 'hidden' }}>
            <img
              src="src/assets/img/244b33a5c8d738c298296d73d0d840348799e37f.png"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div>
            <h3 style={{ color: '#f59e0b' }}>Name</h3>
            <p>%TOTAL REVIEWS%</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <button>
              <img src="src/assets/svg/star.svg" />
            </button>
          </div>
        </div>
        <p style={{ paddingRight: '30px' }}>DATE</p>
      </div>
      <div style={{ padding: '8px 8px' }}>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          totam obcaecati doloremque ipsam. Iusto quisquam dolores, explicabo
          sed soluta nostrum dolor ratione omnis corrupti ea!
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="flex items-center justify-between"
        >
          {isClicked ? (
            <div style={{ display: 'flex', width: '70%' }}>
              <Input type="text" placeholder="Hide comments" />
              <Button>POST</Button>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <ButtonStyled
                style={{ marginRight: '2px' }}
                className="flex items-center gap-2 rounded-l-lg border-r-2 border-r-white bg-slate-400 px-3 py-0.5 text-white hover:bg-slate-500"
              >
                <img src="src/assets/svg/money.svg" />
                <p>Total Likes Likes</p>
              </ButtonStyled>

              <ButtonStyled className="flex items-center gap-2 rounded-r-lg bg-slate-400 px-3 py-0.5 text-white hover:bg-slate-500">
                <p>Comments Total comments</p>
              </ButtonStyled>
            </div>
          )}

          <button
            style={{
              backgroundColor: 'inherit',
              border: 'none',
              color: 'orange',
              fontSize: '18px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            onClick={() => setIsClicked((prev) => !prev)}
          >
            {isClicked ? 'Hide' : 'View all comments'}
          </button>
        </div>
        {isClicked && (
          <>
            <CommentsContainer>
              <CommentsCard>
                <p className="text-amber-500">Cristiano Ronaldo</p>
                <span>I love it</span>
              </CommentsCard>
              <CommentsCard>
                <p className="text-amber-500">Cristiano Ronaldo</p>
                <span>I love it</span>
              </CommentsCard>
            </CommentsContainer>
          </>
        )}
      </div>
    </div>
  );
}

export default RestaurantPageReviewCard;
