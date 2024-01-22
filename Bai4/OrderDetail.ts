import Product from "./Product";
class OrderDeatil {
    _quantity: number;
    _product: Product;

    constructor(_quantity?: number, _product?: Product) {
        if(_quantity) this._quantity = _quantity;
        if(_product) this._product = _product;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }

    calcTotalPrice():number {
        return this._quantity * this._product.price;
    }
    toString(): string {
        return `OrderDetail: { product: ${this._product}, quantity: ${this._quantity} }`;
    }
}

export default OrderDeatil;