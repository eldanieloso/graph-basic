const { createApplication } = require('graphql-modules');
const CIWMembersModule = require('./CIWMembers')

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
    modules: [CIWMembersModule]
});

// This is your actual GraphQL schema
module.exports = application;