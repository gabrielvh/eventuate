var test           = require('tape'),
    basicEventuate = require('..')

test('basic eventuate can be created', function (t) {
    var event = basicEventuate()
    t.equal(typeof event, 'function')
    t.ok(event.filter, 'has filter')
    t.ok(event.forEach, 'has forEach')
    t.ok(event.consume, 'has consume')
    t.ok(event.removeConsumer, 'has removeConsumer')

    t.end()
})