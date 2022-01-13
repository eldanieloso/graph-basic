'use strict'

const CIWMembers = [
    {
        name: 'eldanieloso',
        tag: 'CIW'
    }
]

module.exports = {
    createCIWMember: (root, {member}) => {
        const defaults = {
            name: '',
            tag: ''
        }
        console.log(Object.assign(defaults, member))
        return CIWMembers.find(member => member.name==='eldanieloso' && member.tag==='CIW')
    }
}