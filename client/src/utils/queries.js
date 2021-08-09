import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String) {
        user(username: $username) {
            _id
            username
            email
            notes {
                _id
                noteBody
                date_created
            }
        }
    }
`;

export const QUERY_NOTES = gql`
    query getNotes {
        notes {
            _id
            noteBody
            date_created
        }
    }
`;

export const QUERY_SINGLE_NOTE = gql`
  query getSingleNote($noteId: ID!) {
    thought(thoughtId: $noteId) {
      _id
      noteBody
      date_created
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      notes {
        _id
        noteBody
        date_created
      }
    }
  }
`;