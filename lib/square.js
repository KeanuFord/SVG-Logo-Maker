const Shapes = require('./shapes');

class Square extends Shapes{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    renderShape(){
        return `<rect width="200" height="200" x="50" y="10" fill="${this.shapeColor}"/>`
    }
    
}
module.exports = Square;