import styled from 'styled-components';

const Button = styled.button`
  height: 3rem;
  border-radius: 2rem;
  align-self: end;
  background-color: var(--bg-color-primary);
  color: var(--color-white-regular);
  border: none;
  box-shadow: 1px 3px 5px -2px #564f62;
  margin-bottom: 0.45rem;
}

  &:hover {
    background-color: #ff4b4b;
  }
`;

export default Button;
