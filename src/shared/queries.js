import gql from 'graphql-tag';

const GET_CURRENT_USER_DATA = gql`
  query getUserData($username: String!) {
    user(login: $username) {
      name
      avatarUrl
      bio
      email
      websiteUrl
      followers {
        totalCount
      }
      repositories(last: 3) {
        totalCount
        nodes {
          description
          name
          url
          createdAt
        }
      }
    }
  }
`;

export default GET_CURRENT_USER_DATA;
