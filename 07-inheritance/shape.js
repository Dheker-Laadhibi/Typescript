"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
var shape = /** @class */ (function () {
    function shape(x, y) {
        this.x = x;
        this.y = y;
    }
    shape.prototype.getInfo = function () {
        return "'x=".concat(this.x, ", y=").concat(this.y);
    };
    return shape;
}());
exports.shape = shape;
