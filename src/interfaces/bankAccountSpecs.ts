import { Key } from '../classes/keys';
import { bankAccount } from '../classes/bankAccount'

export interface dataBaseSpecs {
    insert:(account: bankAccount) => boolean
    find:(keys: Key) => number
    delete: (keys: Key) => boolean
}

/* 
i need to increase the balance with the deposit amount, should i use param?

then i need to show the current new balance number

*/