const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        notes: [Note]
    }

    type Note {
        _id: ID
        date_created: String
        note_body: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String): User
        notes(username: String): [Note]
        note(noteId: ID): Note
        me: User
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth
        login(email: String!, password: String!): Auth
        addNote(note_body: String!): Note
        removeNote(noteId: ID!): Note
    }
`;

module.exports = typeDefs;