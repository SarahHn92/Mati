const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('notes');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('notes');
          },
          notes: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Note.find(params).sort({ createdAt: -1 });
          },
          note: async (parent, { noteId }) => {
            return Note.findOne({ _id: noteId });
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('notes');
            }
            throw new AuthenticationError('You need to be logged in!');
          }    
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        }
    }
}