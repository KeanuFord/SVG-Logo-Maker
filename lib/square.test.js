//npm run test.js
const Square = require('./square.js')

describe('Square', () => {

    describe('renderShape', () => {
        it('should return rectangle dimensions and fill color', () => {
            const shape = new Square();
            shape.shapeColor = ('blue');
            expect(shape.renderShape()).toEqual('<rect width="200" height="200" x="50" y="10" fill="blue"/>')
        })
    })
})