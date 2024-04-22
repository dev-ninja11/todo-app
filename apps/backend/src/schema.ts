import { gql } from "apollo-server";

export const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    lat: Float!
    long: Float!
    done: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!, lat: Float!, long: Float!): Todo
    toggleTodo(id: String!): Todo
  }
`;
