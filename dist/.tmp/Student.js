import { Name } from "./Name";
var Student = (function () {
    function Student(firstName, lastName) {
        this.Name = new Name(firstName, lastName);
    }
    return Student;
}());
export { Student };
//# sourceMappingURL=Student.js.map