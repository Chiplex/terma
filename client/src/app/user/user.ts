import { Guest } from '../interface/guest';

export interface User {
    id: string;
    name: string;
    email: string;
    othernames?: string;
    lastname1?: string;
    lastname2?: string;
    gender?: string;
    age?: number;
    guest?: Array<Guest>;
}
