class Product {
    _description: string;
    _price: number;
    _productId: string;

    constructor(_description?: string, _price?: number, _productId?: string) {
        if(_description) this._description = _description;
        if(_price) this._price = _price;
        if(_productId) this._productId = _productId;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }

    get productId(): string {
        return this._productId;
    }

    set productId(value: string) {
        this._productId = value;
    }

    toString(): string {
        return `Product: { productId: ${this._productId}, description: ${this._description}, price: ${this._price} }`;
    }
}
export default Product;
