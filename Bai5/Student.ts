class Student {
    _fullName: string;
    _birthday: Date;
    _point: number[];

    constructor(_fullName?: string, _birthday?: Date, _point?: number[]) {
        if(_fullName) this._fullName = _fullName;
        if(_birthday) this._birthday = _birthday;
        if(_point) this._point = _point;
    }

    get fullName(): string {
        return this._fullName;
    }
    set fullName(value: string) {  
        this._fullName = value;
    }
    get birthday(): Date {
        return this._birthday;
    }
    set birthday(value: Date) {
        this._birthday = value;
    }
    get point(): number[] {
        return this._point;
    }
    set point(value: number[]) {
        this._point = value;
    }
    
}