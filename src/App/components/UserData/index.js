import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import GET_CURRENT_USER from 'shared/queries';

const UserData = () => {
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error && username.length > 0) {
    return <p>Error :(</p>;
  }

  return <h1> {data.user.name}</h1>;
};

export default UserData;
