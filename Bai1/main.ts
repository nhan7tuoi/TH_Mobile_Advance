import Triangle from "./triangle";
class Main {
    static main() {
        const trianglesArray: Triangle[] = [];

        trianglesArray.push(new Triangle(3, 4, 5));
        trianglesArray.push(new Triangle(3, 3, 3));
        trianglesArray.push(new Triangle(3, 3, 4));
        trianglesArray.push(new Triangle(3, 4, 4));
        trianglesArray.push(new Triangle(0, 4, 6));

        trianglesArray.forEach(function (triangle) {
            console.log("--------------------")
            console.log(triangle.toString());
            console.log("--------------------")
        });
    }
}
Main.main();