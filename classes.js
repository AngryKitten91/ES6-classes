// class typeof => function
// es6 classes uses strict mode by default

class Cuboid {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.checkThisBounded = this.checkThis.bind(this);
    }

    volume() {
        return this.x * this.y * this.z;
    }
    checkThis(){
        return this;
    }

};

const cube = new Cuboid(10, 10, 10);

console.log(cube.volume());
console.log(cube.checkThis());
console.log(cube);