var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var myPerson = new Person('John', 'Doe', 31);
console.log(myPerson.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        return _this;
    }
    Employee.prototype.getAge = function () {
        return _super.prototype.getAge.call(this);
    };
    Employee.prototype.getFullName = function () {
        return "The full name of this person is " + _super.prototype.getFullName.call(this);
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'Jane', 'Doe', 21);
console.log(manager.getFullName());
