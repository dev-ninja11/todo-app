import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      lat
      long
      done
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String!, $lat: Float!, $long: Float!) {
    addTodo(text: $text, lat: $lat, long: $long) {
      id
      text
      lat
      long
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: String!) {
    toggleTodo(id: $id) {
      id
      text
      lat
      long
    }
  }
`;
