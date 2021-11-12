// class 
class User {
    name: string
    age: number;
    color?: string;

    // default color set as 'black'
    constructor(name: string, age: number, color: string = 'black') {
        this.name = name.trim();
        this.age = age
        this.color = color;
    }

    about(): void {
        console.log(`Name : ${this.name}. Age : ${this.age}. Color : ${this.color ? this.color : 'n/a'}`)
    }
}

const user1 = new User('Amila', 25);
user1.about();
const user2 = new User('Sampath', 26, 'red')
user2.about();

console.log('--------- Interface ----------')

// interface
interface Human {
    name: string;
    age: number;
    amount?: number;
    info?: Function;
    speak(word: string): void;
    spend?(amount: number): number;
}

console.log('--- Object from interface ---')
// Create Object from interface
const person1: Human = {
    name: 'Amila',
    age: 25,
    speak: (word) => {
        console.log(`voice : ${word}`);
    }
}
console.log(person1)
person1.speak('hi')

console.log('--- Class from interface ---')
// Create Class from interface
class Person implements Human {
    name: string;
    age: number;
    amount?: number;
    constructor(name: string, age: number, amount: number = 0){
        this.name = name;
        this.age = age;
        this.amount = amount;
    }  
    info() {
        console.log(`Name : ${this.name}. Age : ${this.age}. Amount : ${this.amount}`)
    }  
    speak(word: string): void {
        console.log(`voice : ${word}`);
    }
}

const person2 = new Person('Sampath', 25)
person2.info()
person2.speak('hi')