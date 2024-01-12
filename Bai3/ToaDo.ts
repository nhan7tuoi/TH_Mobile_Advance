class ToaDo {
    _ten: string;
    _x : number;
    _y : number;

    constructor(_ten?: string, _x?: number, _y?: number) {
        this._ten = _ten || "";
        this._x = _x || 0;
        this._y = _y || 0;
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