const { rule, shield, deny, allow } = require("graphql-shield")

const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return ctx.role === 'admin'
    // return ctx.role === 'not_admin'
})

// Permissions
module.exports = shield({
    Query: {
        getCIWMembers: isAdmin
    },
    CIWMember: {
        name: allow
        // name: deny
    }
})