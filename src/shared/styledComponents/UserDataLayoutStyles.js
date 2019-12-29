import styled from 'styled-components';

const UserDataLayout = styled.section`
  display: grid;
  grid-template-columns: 7rem repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem;

  border: 2px solid #9c9c9d4f;
  height: 100vh;
  width: 60vw;
  padding: 3rem 1rem;
  border-top: none;
`;

export default UserDataLayout;
