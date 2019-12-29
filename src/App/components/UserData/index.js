import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import {
  UserBio,
  UserImg,
  UserTitle,
  UserRepos,
} from 'App/components/UserData/UserDataStyles';

import UserDataLayout from 'shared/styledComponents/UserDataLayoutStyles';

import GET_CURRENT_USER_DATA from 'shared/queries';

const UserData = () => {
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_CURRENT_USER_DATA, {
    variables: { username },
  });

  if (loading) return <p style={{ marginTop: '3rem' }}>Loading...</p>;

  if (error || data.user.name === null) {
    return (
      <p style={{ marginTop: '3rem' }}>
        Opps, looks like that username is incorrect :(
      </p>
    );
  }
  console.log(data);
  return (
    <UserDataLayout>
      <UserTitle>{data.user.name}</UserTitle>
      <UserBio>
        <p>
          <small>MAIL</small>
          <br />
          <a href={`mailto:${data.user.email}`}>{data.user.email}</a>
        </p>
        {data.user.websiteUrl && (
          <p>
            <small>WEBSITE</small>
            <br />
            <a href={data.user.websiteUrl}>{data.user.websiteUrl}</a>
          </p>
        )}
        <p>
          <small>FOLLOWERS</small>
          <br />
          {data.user.followers.totalCount}
        </p>
        {data.user.bio && (
          <p>
            <small>BIO</small>
            <br />
            {data.user.bio}
          </p>
        )}
      </UserBio>
      <UserImg src={data.user.avatarUrl} alt={data.user.name} />
      <UserRepos>
        hkssuhgkhg fskhgsghlgh gkhglighlwigjlgijlg glwughsgihg gwgjhwlihgwhg
        flwhglfqh wgighlfihwlgih glwighlghwlighw glwighlwihgwg gpihgiwhglihg
        ghgihllg e ehgllhgjehg wgighlfihwlgih glwighlghwlighw glwighlwihgwg
        gpihgiwhglihg ghgihllg e ehgllhgjehg liheglsejhgw ghlgiwheg;ahgweg
        liheglsejhgw ghlgiwheg;ahgweg hlaighlaehg hffghklsg dhfksgljhnhljghee
        fkuehlwwjlhfwg
      </UserRepos>
    </UserDataLayout>
  );
};

export default UserData;
