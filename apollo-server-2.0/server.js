//NPM Package initialized
const express = require('express');
const { ApolloServer, gql, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');


//Server app + PORT + models + env path
const PORT = process.env.PORT || 4000;
const app = express();
const Fav = require('./models/Fav')

//Type defs + resolvers and making an Schema

const { typeDefs } = require('./schema');
const {  resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});


//Mongoose connecting to Atlas database
mongoose
    .connect()