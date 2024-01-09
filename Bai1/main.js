"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var trianglesArray = [];
        trianglesArray.push(new triangle_1.default(3, 4, 5));
        trianglesArray.push(new triangle_1.default(3, 3, 3));
        trianglesArray.push(new triangle_1.default(3, 3, 4));
        trianglesArray.push(new triangle_1.default(3, 4, 4));
        trianglesArray.push(new triangle_1.default(0, 4, 6));
        trianglesArray.forEach(function (triangle) {
            console.log("--------------------");
            console.log(triangle.toString());
            console.log("--------------------");
        });
    };
    return Main;
}());
Main.main();
