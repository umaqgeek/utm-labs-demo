## Unit Test for Assignment 3

### Installation
```
$ npm install
```

### Unit test
1. Put your JSON file under the `./data` folder. Eg.: `data/XXX_Umar_db.json`.
2. Open file [index.test.js](./index.test.js).
3. Modify line 4 and change the word `sample.json` with your JSON file name with its extension. Eg.:
```
...
const router = jsonServer.router('data/XXX_Umar_db.json');
...
```
4. Execute the unit test suite file by running the following command:
```
$ npm run test
```
5. Observe the output.