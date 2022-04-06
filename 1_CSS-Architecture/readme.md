# 1. CSS Architecture

## 1-1. What we'll build

- import default CSS and override if I want to change
- styled-components를 사용하는게 아니라 CSS로 강의가 구성되는 것 같다
- 방법정도만 알고 Storybook 등 이 강의의 다른 컨텐츠들에 집중해야겠다

## 1-2. CSS architecture checklist

- 확장가능하고 유지보수에 용이한 디자인 시스템
- 다른 컴포넌트간 CSS 충돌이 없어야 한다

#### CSS architecture checklist

- Organized - fixed code structure
- No specificity issues
- Atomic design principles
- Easy to understand (comments, variables)
- Fully customizable / themeable
- Reusable across teams / projects

## 1-3. Setup folder and file structure

- atoms
- molecules
- organisms
- foundation
- globalStyles

## 1-4. Define system variables

- 디자인 시스템 figma : https://www.figma.com/file/EX8VxcTtAatzI2PBLb361g/designsystems.engineering?node-id=99%3A0
- 프로젝트에서 사용할 아래 항목들을 정의
  - colors
  - typography : font families, font sizes, font weight
  - breakpoints

## 1-5. Define foundation colors

- variables에 있는 color는 의미가 없는 컬러들 - 공용
- colors에 있는 color는 의미가 있는 컬러들

  - $body-text-color: $dark;
    - $dark를 사용하면 CSS로 변환될 때 고정된 컬러가 되므로 CSS 변수 형태로 사용
    - $body-text-color: var(--dse-body-text-color, $dark) !default;
      - dse : design system for engineering
  - ...

- extension : SCSS IntelliSense
- 다른 scss파일에 있는 변수를 자동완성 시켜줌
