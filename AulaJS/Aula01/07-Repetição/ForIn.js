// For...in

let person = {
    name:'Washington',
    age: 27,
    weight: 79.2
}
for (let property in person) {
    console.log(property)
    console.log(person.name)
    console.log(person[property])
}