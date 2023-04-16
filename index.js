// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    //get
    get diameter(){
        return this.radius *2;
    }
    get circumference(){
        return 2 * Math.PI * this.radius;
    }
    get area(){
        return Math.PI * this.radius **2;
    }
    //setter methodd
    set diameter(value){
        this.radius = value/2;
    }

    set circumference(value){
        this.radius = value /(2 * Math.PI);
    }

    set area(value){
        this.radius = Math.sqrt(value/ Math.PI);

    }

}
const myCircle = new Circle(7);

console.log(myCircle.diameter); // 10
console.log(myCircle.circumference); // 31.41592653589793
console.log(myCircle.area); // 78.53981633974483
