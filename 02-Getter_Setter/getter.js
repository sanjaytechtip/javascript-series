//Syntax
/*
get propertyName() {
    // return the value
}
*/


const person = {
    firstName : "Sanjay",
    lastName : "Adhek",
    get fullName(){
        return this.firstName+ " "+this.lastName;
    }
}

console.log(person.fullName);