import styled from 'styled-components';

export const Input = styled.input`
  height: 4rem;
  width: 80%;
  margin-top: 2rem;
  padding-left: 1rem;
  font-size: var(--font-size-small);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0 1rem;
  }

  /* @media (max-width: 575px) {
    width: auto;
  } */
`;

export const Label = styled.label`
  font-size: var(--font-size-small);

  @media (max-width: 768px) {
    width: 100%;
    justify-self: right;
  }

  /* @media (max-width: 575px) {
    width: auto;
  } */
`;
