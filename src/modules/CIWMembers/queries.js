const CIWMembers = [
    {
        name: 'eldanieloso',
        tag: 'CIW'
    }
]

module.exports = {
    getCIWMembers: () => CIWMembers,
    getCIWMember: (root, args) => {
        return CIWMembers.find(member => member.name===args.name && member.tag===args.tag)
    }
}