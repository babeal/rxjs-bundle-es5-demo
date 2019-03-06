import resolve from "rollup-plugin-node-resolve";
//import babel from "rollup-plugin-babel";

export default {

	plugins: [
		resolve(),
		//babel()
	],

	input: "dist/.tmp/Program.js",

	output: {
		file: "build/bundle.js",
		format: "umd",
		name: "App"
	}

};