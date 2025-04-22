 export class Address{
    city? : string;
    street? : string;
    zip? : number;
 }
 
 export class Student {
    name? : string; 
    age? : number; 
    email? : string;
    address? : Address = new Address()
}