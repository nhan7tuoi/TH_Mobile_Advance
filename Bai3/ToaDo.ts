class ToaDo {
    _ten: string;
    _x : number;
    _y : number;

    constructor(_ten?: string, _x?: number, _y?: number) {
        if(_ten) this._ten = _ten;
        if(_x) this._x = _x;
        if(_y) this._y = _y;
    }

    get Ten(): string {
        return this._ten;
    }
    set Ten(value: string) {
        this._ten = value;
    }

    get X(): number {
        return this._x;
    }
    set X(value: number) {
        this._x = value;
    }

    get Y(): number {
        return this._y;
    }
    set Y(value: number) {
        this._y = value;
    }

    public toString(): string {
        return `(${this._x}, ${this._y})`;
    }
}
export default ToaDo;