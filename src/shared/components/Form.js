import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  align-content: end;

  width: 70vw;
  height: 20vh;

  border-color: var(--color-black-light);
  box-shadow: 1px 5px 15px #564f62;

  padding: 4rem 6rem;
`;

export default Form;
