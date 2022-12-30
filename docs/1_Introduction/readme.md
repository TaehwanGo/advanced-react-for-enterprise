# 0. Introduction to design systems

## 0-1. What are design systems

- consistency : 일관성
- All experiences are consistent

## 0-2. Atomic Design principles

- five different parts
  - atoms
  - molecules
  - organisms
  - templates
  - pages

#### Atom

- An atom is the tiniest little unit that can exit on its own
- e.g.,
  - Label
  - Input
  - Button

#### Molecule

- A combination of many atoms
- e.g.,
  - Search form
    - Label + Input + Button

#### Organism

- A combination of many atoms and molecules
- e.g.,
  - Header, Nav bar
    - Logo + Buttons + Search form

#### Template

- A combination of organisms
- layout과 같은 느낌

#### Page

- A combination of templates
- 페이지와 템플릿의 차이는 데이터의 유무

### Storybook

- breaks down our components into atoms, molecules, organisms

## 0-3. Example design systems

- Colors
- Accessibility
  - what is the focus
  - what is the target
- Typography
- Icon set
- Components

### Good examples

- IBM : Carbon Design System
  - https://www.carbondesignsystem.com/
- Microsoft : Fluent UI
  - https://developer.microsoft.com/en-us/fluentui#/
  - Styles
  - Controls : implementation of the components of the design system.
  - github repository에서 확인해보면 더 좋다 - 우리가 만들 때 참고할 수 있을 것이다

## 0-4. Your role as an engineer in a design system

- 디자인 시스템의 가이드라인을 재사용가능하게 만드는 것
- accessibility
- reusability
- composition
