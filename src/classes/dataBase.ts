import { bankAccount } from './bankAccount';
import { Key } from './keys';
import { dataBaseSpecs, bankAccountSpecs } from '../interfaces';


export class dataBase {
    accounts: bankAccountSpecs[] = [];
  
    constructor() {
        account=[]
    }

    insert = (account: bankAccount):boolean => {
        let account = this.account;
        const newKey = account.findKey(); /*not sure here*/

    }

}

/* or maybe insert (account: bankAccount) {
    ... then it should return true if its equals?

    if not, i will need to push the account? (check online)


}  */