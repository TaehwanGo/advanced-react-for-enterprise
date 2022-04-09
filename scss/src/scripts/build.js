// scss -> css
const Fs = require("fs"); // 파일을 읽고 쓸 수 있음 - file system

const Path = require("path"); // 파일들의 경로를 올바르게 가져오기 위해

const Sass = require("node-sass");

const result = Sass.renderSync({
  data: Fs.readFileSync(Path.resolve("src/global.scss")).toString(),
  outputStyle: "expanded",
  outFile: "global.css",
  includePaths: [Path.resolve("src")],
});

// console.log(result.css.toString());

Fs.writeFileSync(Path.resolve("src/lib/global.css"), result.css.toString());
