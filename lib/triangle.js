const Shapes = require('./shapes');

class triangle extends Shapes{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    renderShape(){
        return `<polygon points="150,10 250,180 50,180" fill="${this.shapeColor}"/>`
    }
    
}
module.exports = triangle;