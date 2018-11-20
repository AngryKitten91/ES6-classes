"use strict";

class X {
    static fn1() {
        console.log(this);
    }
    constructor() {
        this.fn2 = function () {
            console.log(this);
        }
    }
    fn3() {
        console.log(this);
    }
}

const obj = new X();
const x1 = X.fn1;
const x2 = obj.fn2;
const x3 = obj.fn2;

x1();
x2();
x3();


function Y() {
    this.fn3 = function () {
        console.log(this);
    }
}
Y.fn1 = function () {
    console.log(this);
}
Y.prototype.fn2 = function () {
    console.log(this);
}

const obj1 = new Y();
const y1 = Y.fn1;
const y2 = obj1.fn2;
const y3 = obj1.fn3;

y1();
y2();
y3();