class Person {firstName;lastName;age;
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        
        this.lastName=lastName; 
        
        this.age=age;  

    }
    getNames(){
        const name =  `${this.firstName} ${this.lastName}`
        return name;
    }
    getAge(){
        return this.age;
    }
    sayHello(){
        
        return `Hello ${this.getNames()} and your age is ${this.getAge()}`
    }
}


const person = new Person('John','Smith',30);
const text = person.sayHello();
console.log(text);