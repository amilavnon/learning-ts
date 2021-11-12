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