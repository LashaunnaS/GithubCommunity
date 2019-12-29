import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  query getUser($username: String!) {
    user(login: $username) {
      name
      email
      repositories(first: 100) {
        nodes {
          name
          id
        }
      }
    }
  }
`;

export default GET_CURRENT_USER;
