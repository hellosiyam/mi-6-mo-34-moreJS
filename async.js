console.log(1);
console.log(2);
console.log(3);
setTimeout(()=>{
    console.log("arrow function");
}, 4000)
async()
console.log(5);
console.log(6);
console.log(7);
console.log(8);

function async() {
    console.log(4);
}


setTimeout(()=>{
    console.log('Time out is set');
}, 2000)