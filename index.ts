// interfaces 
interface IsPerson {
    name: string;
    age: number;
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

const greedPreson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`)
}

greedPreson(somePerson)