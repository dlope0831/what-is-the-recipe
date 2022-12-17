const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')

      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },

          // for testing only======
          addRecipe: async (parent, args, context) => {
            if (context.user) {
              const recipe = await Recipe.creat({ ...args, _id: context.user._id});

              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { recipes: recipe._id } },
                { new: true }
              );
              return recipe;
            }
          },
          //==========


          saveRecipe: async (parent, { recipeInfo }, context) => {
            if (context.user) {
      
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedRecipes: recipeInfo } },
                { new: true }
              );
              return updatedUser;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          removeRecipe: async (parent, { recipeId }, context) =>{
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedRecipes: { recipeId } } },
                    { new: true }
                  );
                  return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
          }
        }
}




module.exports= resolvers;