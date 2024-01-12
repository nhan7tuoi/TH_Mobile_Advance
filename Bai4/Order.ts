import OrderDeatil from "./OrderDetail";
import Product from "./Product";
class Order {
    orderId: number;
    orderDate: Date;
    lineItems: OrderDeatil[];
    count: number;

    constructor(orderId?: number, orderDate?: Date, lineItems?: OrderDeatil[]) {
        this.orderId = orderId || 0;
        this.orderDate = orderDate || new Date();
        this.lineItems = lineItems || [];
        this.count = 0;
    }

    get _orderId(): number {
        return this.orderId;
    }

    get _orderDate(): Date {
        return this.orderDate;
    }

    get _lineItems(): OrderDeatil[] {
        return this.lineItems;
    }

    set _orderDate(value: Date) {
        this.orderDate = value;
    }

    addLineItems(product:Product, x:number) {
        this.lineItems.push(new OrderDeatil(x, product));
    }
    calcTotalCharge(): number {
        let totalCharge: number = 0;
        this.lineItems.forEach((item) => {
            totalCharge += item.calcTotalPrice();
        });
        return totalCharge;
    }
    toString(): string {
        return `Ma HD : ${this.orderId} \nNgay lap : ${this.orderDate} \nDanh sach san pham : ${this.lineItems} \nTong tien : ${this.calcTotalCharge()}`;
    }
}
export default Order;