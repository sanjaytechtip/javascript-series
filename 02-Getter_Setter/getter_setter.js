
const person = {
    firstName : "Sanjay",
    lastName : "Adhek",
    get fullName(){
        return this.firstName +" "+ this.lastName;
    },
    set fullName(value){
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//console.log(person.fullName);
//console.log(person.firstName);
//console.log(person.lastName);
person.fullName = "John Dee";
//console.log(person.firstName);
//console.log(person.lastName);


//Accessing Getters and Setters Dynamically

const user = {
    firstName:"Sanjay",
    lastName:"Adhek"
};

Object.defineProperty(user,'fullName',{
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    set(value){
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});

console.log(user.fullName)
user.fullName = "John Dee";
console.log(user.firstName);
console.log(user.lastName);