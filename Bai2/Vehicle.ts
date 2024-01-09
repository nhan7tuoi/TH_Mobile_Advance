class Vehicle {
    owner:string;
    typeCar:string;
    price:number;
    capacity:number;

    constructor(owner:string, typeCar:string, price:number, capacity:number) {
        this.owner = owner;
        this.typeCar = typeCar;
        this.price = price;
        this.capacity = capacity;
    }

    public getOwner():string {
        return this.owner;
    }
    public setOwner(owner:string):void {
        this.owner = owner;
    }
    public getTypeCar():string {
        return this.typeCar;
    }
    public setTypeCar(typeCar:string):void {
        this.typeCar = typeCar;
    }
    public getPrice():number {
        return this.price;
    }
    public setPrice(price:number):void {
        if(price > 0) {
            this.price = price;
        }
    }
    public getCapacity():number {
        return this.capacity;
    }
    public setCapacity(capacity:number):void {
        if(capacity > 0) {
            this.capacity = capacity;
        }
    }
    public tax():number {
        if(this.capacity < 100) {
            return this.price * 0.01;
        } else if(this.capacity >= 100 && this.capacity <= 200) {
            return this.price * 0.03;
        } else {
            return this.price * 0.05;
        }
    }
    public toString():string {
        return "Owner: " + this.owner + "\nType Car: " + this.typeCar + "\nPrice: " + this.price + "\nCapacity: " + this.capacity + "\nTax: " + this.tax();
    }
}
export default Vehicle;