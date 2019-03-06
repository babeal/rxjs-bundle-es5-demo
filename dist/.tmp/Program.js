import { range } from "rxjs";
import { Student } from "./Student";
var Program = (function () {
    function Program() {
    }
    Program.main = function () {
        var student = new Student("Rollup", "Babel");
        range(1, 10).subscribe(function (x) { return console.log(x); });
    };
    return Program;
}());
export default Program.main();
//# sourceMappingURL=Program.js.map