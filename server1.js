//convert json to object format
// const jsonString = '{"name":"John", "age":25, "city":"New York"}';
// const jsonObject = JSON.parse(jsonString);//convert json to object
// console.log(jsonObject.name);



//convert object to json format
const objectToConvert = {
    name:"Alice",
    age:25
}
const json = JSON.stringify(objectToConvert);//convert object to json
console.log(json);
console.log(typeof json);

