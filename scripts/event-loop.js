// Call Stack, Web Apis, Callstack Queue
// Async code is pushed from Call stack to Web Apis, then it waits to complete, then it is sent to Calstack Queue, then into Callstack finally
// Event listeners (e.g., for Button) are async calls
console.log("Hello")

let userName = "Waqas Tariq Dar";
let userCity = "Gujrat";

const greetMe = (uName, uCity) => {
    console.log("Welcome "+uName+" from "+uCity)
}

function wait5()
{
    let ms = 5000 + new Date().getTime();
    console.log(ms)
    while (new Date() < ms ) {}
}

setTimeout( () => greetMe(userName, userCity), 2000); // It will only execute when Call Stack is empty
//wait5();

console.log("Welcome to event loop example")

setTimeout (() => {
    console.log("Hello 1");
}, 1000);

setTimeout (() => {
    console.log("Hello 2");
}, 1000);

setTimeout (() => {
    console.log("Hello 3");
}, 1000);
//wait5();

console.log("Before 0 ms setTimeout")
setTimeout (() => {
    console.log("0 ms setTimeout Event");
}, 0);
console.log("After 0 ms setTimeout")

