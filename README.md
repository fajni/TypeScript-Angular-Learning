<<<<<<< HEAD
# TypeScript-Angular-Learning
Learning Repository
=======
<h1> TypeScript-Angular-Learning</h1>
Learning Repository. My personal notes.

<p align = "center">
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" width = "15%">
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width = "20%">
</p>

<h1> Contents</h1>

- [1. TypeScript](#1-typescript)
  - [1.1. Setup TypeScript](#11-setup-typescript)
  - [1.2. Workflow \& tsconfig (lecture-6)](#12-workflow--tsconfig-lecture-6)
  - [1.3. Modules (lecture-13)](#13-modules-lecture-13)
  - [1.4. Small Practice (small\_project)](#14-small-practice-small_project)
- [2. Angular](#2-angular)
  - [2.1.](#21)


# 1. TypeScript

Check _.ts_ files in folders (_lectures_).

Lecture follows Net Ninja course: <a href = "">_TypeScript Tutorial_</a>

## 1.1. Setup TypeScript

1. Download and install npm. (Node.js)
2. `npm install -g typescript`

`tsc typescript_file.ts` - run _.ts_ file/compile to _.js_

`tsc typescript_file.ts typescript_file.js`

__`tsc typescript_file.ts -w`__ - __-w__ stands for __watch__ (don't have to compile it manually)

## 1.2. Workflow & tsconfig (lecture-6)

`tsc --init` - initialize _.ts_ file (creates __tsconfig.json__)

- __"rootDir":__ "./src"
- __"outDir":__ "./public"
  - Files inside root directory (./src) will be compiled and placed inside out directory (./public).

By calling __`tsc -w`__, it will watch all the _.ts_ files for changes, not just one.

By adding _include_ property at the end of _tsconfig.json_ file, only _.ts_ files inside _src_ folder will be compiled and their _.js_ placed inside public folder.
<pre>"include": [
  "src"
]</pre>

## 1.3. Modules (lecture-13)

_Importing files (classes/modules) ..._

<details>
<summary>html file:</summary>
<pre><script type="module" src='app.js'></script></pre>
</details>

__tsconfig.json__:

- "target": "ES2021"
- "module": "ES6"

<details>
<summary>import classes/modules in <i>main.ts</i> file</summary>
<pre>import {Invoice} from './classes,modules/Invoice.js'</pre>
</details>

<br/>

_Note: When starting, it needs to be with __LIVE SERVER__! Otherwise error occurs (CORS POLICY)._

## 1.4. Small Practice (small_project)

Build a small project for the purposes of practice TypeScript. Check README.md inside _small_project_ folder for more about this project.

<details>
<summary>Images</summary>
  <img src = "./typescript/small_project/images/cards.PNG">
</details>

<hr/>

# 2. Angular

Lecture follows Udemy course: <a href = "https://www.udemy.com/course/the-complete-guide-to-angular-2"> _Angular - The Complete Guide (2024 Edition)_ </a>

## 2.1. 

>>>>>>> 4ea5716 (TypeScript Lectures)
