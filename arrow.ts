function printHello() {
    console.log('Hello!');
}

// printHello();

var printHelloAnonymous = () => {
    console.log('Hello!');
}

// printHelloAnonymous();

let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        // arrow functions maintain the scope of the father, doesn't create a new one
        return () => {
            console.log(`The full name of this user is ${this.firstName} ${this.lastName}`);
        }
    }
}

user.getFullName()();
