var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, lastName, age, mail) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.mail = mail;
    }
    Person.prototype.walk = function () {
        return console.log("Walk");
    };
    Person.prototype.eat = function () {
        console.log("Eat");
    };
    Person.prototype.work = function () {
        console.log("Work");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, lastName, age, mail, school, career) {
        var _this = _super.call(this, name, lastName, age, mail) || this;
        _this.school = school;
        _this.career = career;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("Study");
    };
    return Student;
}(Person));
var Peter = new Student("Peter", "Perez", 31, "mail@domain.com", "UV", "chemical engineering");
console.log(Peter);
Peter.walk();
