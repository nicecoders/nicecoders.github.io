'use strict';

const sensitivewords = require('../lib/index');

describe('sensitiveWords', () => {
    beforeAll(() => console.log('beforeAll'))
    afterAll(() => console.log('afterAll'))
    beforeEach(() => console.log('beforeEach'))
    afterEach(() => console.log('afterEach'))
    test('fuck', () => console.log('fuck'))
});
