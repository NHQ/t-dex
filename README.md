# t-dex

Draws an accurate representation of intervals over time. For HTML canvas. 

Use with [browserify](https://github.com/substack/node-browserify).

It's easy, just pass the function a param object. See the ex.js file for usage.

## from the example ex.js

To run this example, do:
```
npm install -g browserify opa
cd /t-dex
opa -n -e ex.js
```

```js
var timeline = require('t-dex');

var canvas = document.createElement('canvas');
canvas.height = 60;
canvas.width = 800;
canvas.style.border = '1px solid OrangeRed';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

// DO THIS
ctx.translate(0.5, 0.5)
//

var q = Object(null);
q.canvas = canvas // required
q.start = 10.25; // in seconds, required
q.duration = 12; // in seconds, required
q.intervals = [1/2, 1/4, 1/8] // at least one required 
q.x = 100 // default 0
q.y = 20 // default 0
q.width = 600 // default canvas.width
q.height = 20  // default canvas.height
q.fillStyle = null // default to transparet
q.strokeStyle = 'rgba(20,20,20,.25)' // that is the default

timeline(q)
```