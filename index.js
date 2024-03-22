const inquirer = require('inquirer')
const fs = require('fs');
const Circle = require('./lib/circle.js');

// Prompts user to choose logo text, text color, logo shape, and shape color
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Type up to 3 characters',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Type a color or hex value for text: ',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like?',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: 'What color should the shape be',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        //Grabs the first 3 characters if the input incase the user has entered more
        let text = response.text.slice(0,3);
        console.log(response);
        let logo;
        switch(response.shape) {
            case 'Circle':
                logo = new Circle(text, response.textColor, response.shape, response.shapeColor);
                console.log("Circle created");
                break;
            case 'Square':
                
                break;
            case 'Triangle':

                break;
        }
        const svg = 
`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${logo.renderShape()}
    ${logo.renderText()}
</svg>
                    `
        fs.writeFile('logo.svg', svg, (err) => {
            if(err) throw err;
            else console.log("Logo created");
        });  
    });
