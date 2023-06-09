import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_PLANT = gql`
  mutation savePlant($input: PlantInput) {
    savePlant(input: $input) {
      _id
      username
      plantCount
      savedPlants {
        plantId
        author
        bibliography
        common_name
        family
        title
        year
        observations
        image
        links
        scientificname
      }
    }
  }
`;

export const REMOVE_PLANT = gql`
  mutation removePlant($plantId: Int) {
    removePlant(plantId: $plantId) {
      _id
      username
      plantCount
      savedPlants {
        plantId
        author
        bibliography
        common_name
        family
        title
        year
        observations
        image
        links
        scientificname
      }
    }
  }
`;