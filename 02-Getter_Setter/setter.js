//Setters
/*
set propertyName(value){
// set the value
}
*/

const person = {
    firstName: "Sanjay",
    lastName : "Adhek",
    set fullName(value){
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = "Jhon Dee"; // this call the setter value
console.log(person.firstName);
console.log(person.lastName);



