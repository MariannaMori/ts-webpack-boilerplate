import { bankAccount } from './classes/bankAccount';
import { dataBase } from './classes/dataBase';
import { Key } from './classes/keys';

let db = new dataBase();

let firstKey = new Key(12345);
let firstAccount = new bankAccount(5000, firstKey);
let firstResult = db.insert(firstAccount);

let secondKey = new Key(54321);
let secondAccount = new bankAccount(1000, secondKey);
let secondResult = db.insert(secondAccount);

let thirdKey = new Key(98765);
let thirdAccount = new bankAccount(1000, thirdKey);
let thirdResult = db.insert(thirdAccount);

let findAccount = db.find(firstKey) /*secondkey, third key etc */

console.log(findAccount.getBalance)