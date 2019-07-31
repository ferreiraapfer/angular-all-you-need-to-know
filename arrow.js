function printHello() {
    console.log('Hello!');
}
// printHello();
var printHelloAnonymous = function () {
    console.log('Hello!');
};
// printHelloAnonymous();
var user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        var _this = this;
        // arrow functions maintain the scope of the father, doesn't create a new one
        return function () {
            console.log("The full name of this user is " + _this.firstName + " " + _this.lastName);
        };
    }
};
user.getFullName()();
