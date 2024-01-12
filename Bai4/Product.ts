class Product {
    _description: string;
    _price: number;
    _productId: string;

    constructor(_description?: string, _price?: number, _productId?: string) {
        this._description = _description || "";
        this._price = _price || 0;
        this._productId = _productId || "";
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
