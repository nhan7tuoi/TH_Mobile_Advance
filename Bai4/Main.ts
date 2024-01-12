import Product from "./Product";
import Order from "./Order";
import OrderDeatil from "./OrderDetail";
class Main {
    static main(): void {
        let product1: Product = new Product("Iphone", 10000000, "1");
        let product2: Product = new Product("Samsung", 20000000, "2");
        let product3: Product = new Product("Oppo", 30000000, "3");
        let product4: Product = new Product("Xiaomi", 40000000, "4");
        let product5: Product = new Product("Huawei", 50000000, "5");
        let order: Order = new Order(1, new Date());
        order.addLineItems(product1, 2);
        order.addLineItems(product2, 3);
        order.addLineItems(product3, 4);
        order.addLineItems(product4, 5);
        order.addLineItems(product5, 6);
        console.log(order.toString());
    }
}
Main.main();