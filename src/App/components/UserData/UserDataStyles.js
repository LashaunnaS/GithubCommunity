import styled from 'styled-components';

export const UserTitle = styled.h1`
  grid-area: 1/1/3/2;
  align-self: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  @media (max-width: 991px) {
    grid-area: 1 / 1 / 2 / 4;
    font-size: var(--font-size-larger);
    line-height: var(--line-height-larger);
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
  }
`;

export const UserBio = styled.div`
  grid-area: 1 / 2 / 2 / 3;

  p {
    padding-bottom: 1rem;
    font-size: var(--font-size-smaller);
    line-height: var(--line-height-smaller);
  }

  @media (max-width: 991px) {
    grid-area: 2 / 1 / 3 / 4;
  }
`;

export const UserImg = styled.img`
  width: 75%;
  grid-area: 1/3/2/4;
  justify-self: center;
  border-radius: 50%;

  @media (max-width: 991px) {
    width: 50%;
    grid-area: 3 / 1 / 4 / 4;
    justify-self: center;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    width: 75%;
  }
`;

export const UserRepos = styled.div`
  grid-area: 2 / 2 / 3 / 4;

  @media (max-width: 991px) {
    grid-area: 4 / 1 / 5 / 4;
  }
`;

export const Repo = styled.div`
  padding-bottom: 2rem;
`;

export const RepoHeader = styled.p`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    padding-bottom: 1rem;
    font-size: var(--font-size-smaller);
    line-height: 2.5rem;
  }
`;

export const RepoDesc = styled.p`
  @media (max-width: 991px) {
    font-size: var(--font-size-smaller);
    line-height: 2.5rem;
  }
`;
