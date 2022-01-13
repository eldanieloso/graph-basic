const { ApolloServer } = require('apollo-server');
const { applyMiddleware } = require('graphql-middleware')
const permissions = require('./src/permissions')

require('dotenv').config();

const app = require("./src/modules/app");
const schema = applyMiddleware(app.createSchemaForApollo(), permissions)
const server = new ApolloServer({schema, context: ({ req }) => {
    return {id: 1, role: 'admin'}
}});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});