import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  align-content: end;

  width: 70vw;
  height: 15rem;

  border-color: var(--color-black-light);
  box-shadow: 1px 5px 15px #564f62;

  padding: 4rem 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 2fr;
    padding: 2.5rem 6rem;
  }

  @media (max-width: 575px) {
    width: auto;
  }
`;

export default Form;
