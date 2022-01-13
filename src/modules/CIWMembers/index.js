const { createModule, gql } = require('graphql-modules');
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require('./resolvers')

module.exports = createModule({
    id: 'ciw-members',
    dirname: __dirname,
    typeDefs: [
        gql(readFileSync(join(__dirname, "schema.graphql"), "utf-8"))
    ],
    resolvers
});