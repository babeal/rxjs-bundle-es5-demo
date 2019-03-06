import { range } from "rxjs";

import { Student } from "./Student";

class Program {
    static main(): void {
        var student = new Student("Rollup", "Babel");
        range(1, 10).subscribe(x => console.log(x));
    }
}

export default Program.main();
