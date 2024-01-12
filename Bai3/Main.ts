import HinhTron from "./HinhTron";
import ToaDo from "./ToaDo";

class Main {
    public static main(): void {
        let toaDo: ToaDo = new ToaDo("O", 5, 5);
        let hinhTron: HinhTron = new HinhTron(toaDo, 10.5);
        console.log(hinhTron.perimeter());
        console.log(hinhTron.area());
    }
}
Main.main();