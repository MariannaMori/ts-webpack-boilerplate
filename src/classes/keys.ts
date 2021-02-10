import { keySpecs } from '../interfaces/keysSpecs';

export class Key implements keySpecs {
    keys: number;

    constructor(number: number) {
        this.keys=number;
    }

    equals(keys):boolean {
        if (keys === this.keys) {
            return true {

            }
            else {
                return false
            }
        }
    }
};