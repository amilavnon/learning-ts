// interfaces 
interface IsPerson {
    name: string;
    age: number;
    color?: string;
    speak(a:string): void;
    spend(a: number):number;
}
const somePerson: IsPerson = {
    name: 'Amila',
    age: 21,
    speak(text:string): void {
        console.log(text);
    },
    spend(amount:number):number {
        console.log(amount);
        return amount;
    }    
}
const anotherPerson: IsPerson = {
    name: 'Sam',
    age: 2,
    color: 'green',
    speak(text:string): void {
        console.log(text);
    },
    spend(amount:number):number {
        console.log(amount);
        return amount;
    }    
}
const greedPreson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`)
}
greedPreson(somePerson)

class Person implements IsPerson {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    speak(text:string): void{
        console.log(`voice: ${text}`)
    }
    spend(amount:number): number{
        return amount
    }
}

const person = new Person('amila', 20)

person.speak(`I'm amila. Who are you ?`)
const spendAmount = person.spend(20)
console.log(`person spent : ${spendAmount}`)