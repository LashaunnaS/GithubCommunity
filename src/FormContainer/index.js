import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Button from 'shared/components/Button';
import Form from '../shared/components/Form';
import { Input, Label } from '../shared/components/InputAndLabel';

const GET_CURRENT_USER = gql`
  {
    user(login: "lashaunnas") {
      name
      email
    }
  }
`;

const FormContainer = () => {
  const [inputName, setInputName] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputName);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Github username
        <Input
          type="text"
          id="name"
          value={inputName}
          onChange={handleChange}
          placeholder="github username"
        />
      </Label>
      <Button type="submit">GENERATE</Button>
    </Form>
  );
};

export default FormContainer;
