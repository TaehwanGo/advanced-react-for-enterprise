# Monorepositories

## Setup mono repository with yarn and lerna

- Mono repository : manage all of the packages

  - especially those that are interdependent in one repository and one workspace

- packages 폴더 안으로 scss 패키지를 옮김
- lerna 설치(root dir)
  - A tool for managing JavaScript projects with multiple packages.

`yarn add --dev lerna`

`yarn lerna init`

lerna.json에 설정한 packages/\*가 관리 대상

build 스크립트 - "yarn lerna run build" - 로 packages안에 있는 패키지들 모두를 한번에 build할 수 있음

모노레포는 npm에 배포할 것이기 아니기 때문에 private 을 true로 설정
