import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($noteBody: String!) {
    addNote(noteBody: $noteBody) {
      note {
        _id
        date_created
        noteBody
      }
    }
  }
`;