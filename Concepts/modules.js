// ES6 Modules -> An external file that conatin reusable code
//                that can be imported into other JavaScript files.
//                Write reusable code for many different app.
//                Can conatin variables, classes, functions.... and more
//                Introduced as part of ECMAScript 2015 update

//  ** make sure to choose type="module" in script tag when u need to import module into any index.js after that write the below code 

import {PI, getCircumference, getArea } from '../Concepts/module#1.js';

console.log(PI);
const circumference = getCircumference(10);

console.log(`${Circumference.toFixed(2)}cm`);


// this code currently gives error since we havent yet included type="module" i the script tag as we are
// currently only writing js code but still i have written the syntax to know how to import/export modules for future reference 
