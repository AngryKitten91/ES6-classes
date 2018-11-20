class Car {
    constructor(brand) {
        this.brand = brand;
    }

    getBrand() {
        console.log(this.brand);
    }
}

class Truck extends Car{
    constructor(brand, wheels){
        super(brand);
        this.wheels = wheels;
    }
    transform(){
        console.log('transform');
    }
}


const truck = new Truck('Volvo', 18);

console.log(truck.getBrand());

