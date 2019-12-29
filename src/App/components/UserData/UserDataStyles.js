import styled from 'styled-components';

export const UserTitle = styled.h1`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  grid-column: 1/2;
  grid-row: 1/3;
  align-self: center;
`;

export const UserBio = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;

  p {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

export const UserImg = styled.img`
  width: 75%;
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: center;
  border-radius: 50%;
`;

export const UserRepos = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
`;

export const Repo = styled.div`
  padding-bottom: 2rem;
`;

export const RepoHeader = styled.p`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
