"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var shape_1 = require("./shape");
var shape1 = new shape_1.shape(10, 15);
console.log(shape1.getInfo());
var circle1 = new circle_1.circle(5, 10, 4);
console.log(circle1.getInfo());
var theshapes1 = [];
theshapes1.push(shape1);
theshapes1.push(circle1);
for (var _i = 0, theshapes1_1 = theshapes1; _i < theshapes1_1.length; _i++) {
    var shap = theshapes1_1[_i];
    console.log(shap.getInfo());
}
