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
