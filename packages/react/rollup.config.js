import Ts from "rollup-plugin-typescript2";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Button/index.ts",
    "src/atoms/Margin/index.ts",
  ],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [Ts()],
  preserveModules: true, // preserve source folder
  external: ["react", "@ds.e/foundation"],
};
