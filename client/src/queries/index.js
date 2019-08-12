import { gql } from "apollo-boost";

export const GET_ALL_FAVS = gql`
  query {
    getAllFavs {
      place
      order
      createdDate
      username
    }
  }
`;

export const SIGNUP_USER = gql`
mutation($email: String!,$password: String!, $username: String!, $city: String!,$state: String!, $allergies: String, $bio: String){
  signupUser(email: $email, password: $password, username: $username, city: $city, state: $state, allergies: $allergies, bio: $bio){
    token
  }
}
`;

export const SIGNIN_USER = gql`
mutation($username: String!, $password: String!){
  signinUser(username: $username, password: $password){
    token
  }
}`;


export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser{
      username
    }
  }

`;