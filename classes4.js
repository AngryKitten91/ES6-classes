
// class Person{
//     constructor(name){
//         this.isMammal = true;
//         this.name = name
//     }
// }

// class Gender extends Person{
//     constructor(gender, name){
//         super(name)
//         this.gender = gender;
//     }
// }

// const john = new Gender('male', 'John')

// console.log(john);

function Person(name){
    this.isMammal = true;
    this.name = name;
}
Person.prototype.fn = function(){
    console.log('asd');
}

class Gender extends Person{
    constructor(gender, name){
        super(name)
        this.gender = gender;
    }
}

const john = new Gender('male', 'John')
john.fn();

