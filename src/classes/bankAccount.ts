import { bankAccountSpecs } from '../interfaces/bankAccountSpecs';
import { Key } from './keys';


export class bankAccount implements bankAccountSpecs {
    balance: number;
    keys: Key;
}

constructor(balance: number, keys: Key){
    this.balance = balance;
    this.key = Key;
}


deposit = (amount:number):boolean => {
    amount = this.balance + amount
    return true
}

getBalance = (): number => {
    return this.balance
}

getKey = ():Key => {
    return this.keys
}
}