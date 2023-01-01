# Section 4. Implementation of React

// 이번 폴더 부터는 강의에 나와있는 강의 클립 번호를 따라감

## 21. Add react package to mono repository

packages 폴더 안에 react 폴더 생성 후

`yarn init -y`

react에 필요한 것들을 설치

`yarn add react @types/react typescript`

- node_modules에 있는 것들이 자동으로 root node_modules로 호이스팅 됨(.bin 제외)

tsconfig.json 설정

### react

index.ts

atoms, molecules, foundation

## 22. Add rollup to compile react

npm 으로 배포하기 위해 ship(옮기는 것을 의미하는 듯) tsx

Rollup vs Webpack

- https://yoon-dumbo.tistory.com/entry/%EB%A1%A4%EC%97%85%EA%B3%BC-%EC%9B%B9%ED%8C%A9%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-rollup-vs-webpack
- 앱에는 웹팩, 라이브러리에는 롤업 사용

`yarn add --dev rollup rollup-plugin-typescript2`

- typescript 파일을 컴파일하는 것을 돕는 플러그인

react의 package.json에서 script -> build

- rollup -c
  - c 옵션은 rollup.config.js를 사용하겠다는 의미

다음 강의에선 이것들이 실제로 동작하는 것들을 확인

## 23. Setup a react playground

- 예상한 대로 동작하는지 테스트 할 수 있는 플레이그라운드를 만들어 볼 것을 추천한다
- playgrounds

  - part of workspace => package.json의 workspaces에 추가
  - import the packages

- playgrounds/react

  - yarn init -y
  - yarn add react @types/react typescript parcel-bundler
  - yarn add react-dom @types/react-dom

- monorepo로 관리할 땐 node_modules의 호이스팅을 이용해서 서로 다른 packages안에 서로 다른 프로젝트들에
  중복된 library가 필요할 때 용량을 줄일 수 있다

- package.json에 main은 무엇을 export 할지 명시해줌

```json
"main": "lib/index.js"
```

```tsx
import ReactDom from "react-dom";
import { Button } from "@ds.e/react";

ReactDom.render(
  <Button label="Example Button" />,
  document.querySelector("#root")
);
```

- React 18에서 더 이상 지원되지 않음
- createRoot를 사용해야 함
- https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

```tsx
import { createRoot } from "react-dom/client";
import { Button } from "@ds.e/react";

const rootContainer = document.querySelector("#rout") as Element;
const root = createRoot(rootContainer);
root.render(<Button label="Example Button" />);
```

- 뭐지? 언제부터 react root가 rout이 되었네

#### packages의 react를 가져와봤으니 packages의 scss도 사용해보자

## 24. Setup dev script for all packages

- packages의 변화를 감지할 수 있는 nodemon을 설치
  - packages안에 있는 레포들(react, scss)에 각각 nodemon script 설정

`yarn add --dev nodemon`

- react package엔 nodemon이 아닌 build --watch 모드로 실행하는 구나

- playground, packages/\* 모두 dev 스크립트로 실행되니
  root dir package.json에서 lerna를 통해 dev스크립트를 설정하여 공통으로 실행할 수 있게 함
  - root dir에서 yarn dev 실행 시 모든 패키지들의 dev 스크립트가 실행 됨
  - packages의 scss 또는 react 패키지에서 무언가를 변경 후 저장하면 자동으로 반영 됨

## 25. Identify atoms, molecules and organisms

- atoms
  - 컬러
  - 아이콘
  - 텍스트
- molecules
  - 셀렉트 아이템들
    - 컬러, label(레이블), 백그라운드로 이루어진 하나의 박스
- organisms
  - molecules의 조합을 모아놓은 드롭다운 컴포넌트

## 26. Assignment - 카드 컴포넌트 아토믹디자인으로 만들어보기

- 스킵

## 27. Develop the color component

- color 컴포넌트를 만들어보자

### 이슈

- Error: Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (108)
  - m1 mac에서 발생하는 이슈
- 시도 : yarn add sass --save-dev
  - 참고 : https://im-designloper.tistory.com/51

## 28. Dynamically generate utility classes

## 29. Assignment - create image atom

- 생략

## 30. Extract foundation to a separate package

- react에 종속되어 있었던 foundation을 별도의 패키지로 분리

- cd packages/foundation
- yarn init -y
- yarn add --dev typescript

## 31. Spacing component

- spacing 컴포넌트를 만들어보자
- margin, padding을 조절할 수 있는 컴포넌트

### Error: Could not resolve entry module (src/atoms/Margin).

```js
// rollup.config.js

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
```

- "src/atoms/Margin/index.ts"를 다 적어줘야 함
  - "src/atoms/Margin"만 적어주면 에러 발생
