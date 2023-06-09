const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    plantCount: Int
    savedPlants: [Plant]
  }

  type Plant {
    plantId: Int
    author: String
    bibliography: String
    common_name: String
    family: String
    title: String
    year: Int
    observations: String
    image: String
    links: [String]
    scientificname: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input PlantInput {
    plantId: Int
    author: String
    bibliography: String
    common_name: String
    family: String
    title: String
    year: Int
    observations: String
    image: String
    links: [String]
    scientificname: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePlant(input: PlantInput): User
    removePlant(plantId: Int): User
  }
`;

module.exports = typeDefs;
