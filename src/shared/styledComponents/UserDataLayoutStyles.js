import styled from 'styled-components';

const UserDataLayout = styled.section`
  display: grid;
  grid-template-columns: 7rem repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem;

  width: 60vw;
  height: 100;
  border: 2px solid #9c9c9d4f;
  border-top: none;
  padding: 3rem 1rem;

  @media (max-width: 768px) {
    grid-template-columns: minmax(80px, 1fr);
    grid-template-rows: repeat(3, auto);
    padding: 3rem;
  }

  @media (max-width: 575px) {
    grid-template-columns: minmax(80px, 1fr);
    grid-template-rows: repeat(3, auto);
    width: 80vw;
    padding: 1rem;
  }
`;

export default UserDataLayout;
