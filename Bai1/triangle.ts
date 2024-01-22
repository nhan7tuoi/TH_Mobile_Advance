class Triangle {
    ma: number;
    mb: number;
    mc: number;

    constructor(ma?: number, mb?: number, mc?: number) {
        if (ma && mb && mc) {
            if (ma < 0 || mb < 0 || mc < 0 || (ma + mb < mc || ma + mc < mb || mb + mc < ma)) {
                this.ma = 0;
                this.mb = 0;
                this.mc = 0;
            } else {
                this.ma = ma;
                this.mb = mb;
                this.mc = mc;
            }
        }
    }
    get Ma() {
        return this.ma;
    }
    set Ma(a: number) {
        if (a > 0) {
            this.ma = a;
        }
    }
    get Mb() {
        return this.mb;
    }
    set Mb(b: number) {
        if (b > 0) {
            this.mb = b;
        }
    }
    get Mc() {
        return this.mc;
    }
    set Mc(c: number) {
        if (c > 0) {
            this.mb = c;
        }
    }
    isTriangle() {
        if (this.ma == 0 || this.mb == 0 || this.mc == 0) {
            return false;
        }
        return true;
    }
    isEquilateralTriangle() {
        if (this.ma == this.mb && this.mb == this.mc) {
            return true;
        }
        return false;
    }
    isIsoscelesTriangle() {
        if (this.ma == this.mb || this.mb == this.mc || this.ma == this.mc) {
            return true;
        }
        return false;
    }
    isNormalTriangle() {
        if (this.ma != this.mb && this.mb != this.mc && this.ma != this.mc) {
            return true;
        }
        return false;
    }
    perimeter() {
        return this.ma + this.mb + this.mc;
    }
    area() {
        let p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    }
    info() {
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
    }
    toString() {
        return "Tam giac co 3 canh la: " + this.ma + ", " + this.mb + ", " + this.mc + "\n"
            + this.info() + "\nChu vi: " + this.perimeter() + "\nDien tich: " + this.area();
    }
}
export default Triangle;