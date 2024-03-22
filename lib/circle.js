const Shapes = require('./shapes');

class Circle extends Shapes{
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    renderShape(){
        return `<circle cx="150" cy="105" r="80" fill="${this.shapeColor}"/>`
    }
    renderText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = Circle;