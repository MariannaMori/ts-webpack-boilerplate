import { bankAccount } from '../classes/bankAccount';

import { Key } from '../classes/keys';

export interface dataBaseSpecs {
    insert: (account: bankAccount) => boolean;
    find: (keys: Key) => number;
    delete: (keys: Key) => boolean;
  }