import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from 'shared/styledComponents/ButtonStyles';
import { Input, Label } from 'shared/styledComponents/InputAndLabelStyles';
import Form from 'shared/styledComponents/FormStyles';

const FormContainer = () => {
  const [inputName, setInputName] = useState('');
  // add redirect trigger (bool state)
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [username, setUsername] = useState('');

  const handleChange = event => {
    setInputName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUsername(inputName);
    // set redirect true
    setIsRedirecting(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Github username
        <Input
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="github username"
        />
      </Label>
      <Button type="submit" value="GENERATE">
        GENERATE
      </Button>
      {/* redirect && do redirect to /:username */}
      {isRedirecting && <Redirect to={`/${username}`} />}
    </Form>
  );
};

export default FormContainer;
