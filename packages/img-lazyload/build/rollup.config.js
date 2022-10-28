import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import pkg from "../package.json";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: "auto",
    },
    {
      file: pkg.jsdelivr,
      format: "umd",
      name: "watermark",
      sourcemap: true,
      exports: "auto",
    },
  ],
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
