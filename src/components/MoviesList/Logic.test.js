const isChildFriendly = require('./Logic')

test('movie is childfriendly', () => {
    expect(isChildFriendly()).tobe(true)
})