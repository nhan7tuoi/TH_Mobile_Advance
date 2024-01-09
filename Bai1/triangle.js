"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle = /** @class */ (function () {
    function Triangle(ma, mb, mc) {
        if (ma < 0 || mb < 0 || mc < 0 || (ma + mb < mc || ma + mc < mb || mb + mc < ma)) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        else {
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }
    }
    Object.defineProperty(Triangle.prototype, "Ma", {
        get: function () {
            return this.ma;
        },
        set: function (a) {
            if (a > 0) {
                this.ma = a;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Mb", {
        get: function () {
            return this.mb;
        },
        set: function (b) {
            if (b > 0) {
                this.mb = b;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Mc", {
        get: function () {
            return this.mc;
        },
        set: function (c) {
            if (c > 0) {
                this.mb = c;
            }
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.isTriangle = function () {
        if (this.ma == 0 || this.mb == 0 || this.mc == 0) {
            return false;
        }
        return true;
    };
    Triangle.prototype.isEquilateralTriangle = function () {
        if (this.ma == this.mb && this.mb == this.mc) {
            return true;
        }
        return false;
    };
    Triangle.prototype.isIsoscelesTriangle = function () {
        if (this.ma == this.mb || this.mb == this.mc || this.ma == this.mc) {
            return true;
        }
        return false;
    };
    Triangle.prototype.isNormalTriangle = function () {
        if (this.ma != this.mb && this.mb != this.mc && this.ma != this.mc) {
            return true;
        }
        return false;
    };
    Triangle.prototype.perimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    Triangle.prototype.area = function () {
        var p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    Triangle.prototype.info = function () {
        if (this.isTriangle()) {
            if (this.isEquilateralTriangle()) {
                return "Tam giac deu";
            }
            if (this.isIsoscelesTriangle()) {
                return "Tam giac can";
            }
            if (this.isNormalTriangle()) {
                return "Tam giac thuong";
            }
        }
        return "Khong phai tam giac";
    };
    Triangle.prototype.toString = function () {
        return "Tam giac co 3 canh la: " + this.ma + ", " + this.mb + ", " + this.mc + "\n"
            + this.info() + "\nChu vi: " + this.perimeter() + "\nDien tich: " + this.area();
    };
    return Triangle;
}());
exports.default = Triangle;
