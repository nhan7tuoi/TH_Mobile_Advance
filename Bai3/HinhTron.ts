import ToaDo from "./ToaDo";
class HinhTron {
    _tam: ToaDo;
    _banKinh: number;

    constructor(_tam?: ToaDo, _banKinh?: number) {
        if(_tam) this._tam = _tam;
        if(_banKinh) this._banKinh = _banKinh;
    }

    get Tam(): ToaDo {
        return this._tam;
    }
    set Tam(value: ToaDo) {
        this._tam = value;
    }
    get BanKinh(): number {
        return this._banKinh;
    }
    set BanKinh(value: number) {
        this._banKinh = value;
    }
    perimeter(): number {
        return Math.PI * this._banKinh * 2;
    }
    area(): number {
        return Math.PI * this._banKinh * this._banKinh;
    }

}
export default HinhTron;