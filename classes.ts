interface IPerson {
    getFullName(): string;
}

class Person implements IPerson{

    constructor(private firstName: string, private lastName: string, private age: number) {
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    protected getAge(): number {
        return this.age;
    }
}

let myPerson: Person = new Person('John', 'Doe', 31);
console.log(myPerson.getFullName());

class Employee extends Person {

    constructor(private id: number, firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }

    getAge() : number {
        return super.getAge();
    }

    getFullName() : string{
        return `The full name of this person is ${super.getFullName()}`;
    }
}

let manager: Person = new Employee(1, 'Jane', 'Doe', 21);
console.log(manager.getFullName());