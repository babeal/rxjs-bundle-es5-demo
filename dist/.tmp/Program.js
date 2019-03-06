import { range } from "rxjs";
var Program = (function () {
    function Program() {
    }
    Program.main = function () {
        var student = new Student("Rollup", "Babel");
        range(1, 10).subscribe(function (x) { return console.log(x); });
    };
    return Program;
}());
Program.main();
//# sourceMappingURL=Program.js.map