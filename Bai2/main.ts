import Vehicle from "./Vehicle";
class Main {
    static main(): void {
        const vehiclesArray: Vehicle[] = [];
        vehiclesArray.push(new Vehicle("Nhan", "A", 100, 50));
        vehiclesArray.push(new Vehicle("Nhan", "B", 200, 150));
        vehiclesArray.push(new Vehicle("Nhan", "C", 300, 250));
        vehiclesArray.forEach(function (vehicle) {
            console.log("--------------------")
            console.log(vehicle.toString());
            console.log("--------------------")
        });
    }
}
Main.main();