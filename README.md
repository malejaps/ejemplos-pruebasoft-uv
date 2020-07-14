# ejemplos-pruebasoft-uv
Basic e2e example for Universidad del Valle
Course: Pruebas de Software 
Instructor: Maria Alejandra P.

## Tools
[TestCafe](https://devexpress.github.io/testcafe/)
A node.js tool to automate end-to-end web testing

## Prerequisites
[Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed


## TestCafe Configuration
Run the following command
```
npm install -g testcafe
```
More detail: [Install TestCafe](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/install-testcafe.html)  

## Run tests cases (option 1)
Run the following command
```
testcafe chrome, firefox ./tests/buscador.ts
```

## Run tests cases (option 2)
1. Go to root directory (here is the package.json file)
2. Run the following command
```
npm install
```
3. The /node_modules are created
4. Run the following command
```
npm run test
```




