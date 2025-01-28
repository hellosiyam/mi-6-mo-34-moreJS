console.log(1);
console.log(2);
console.log(3);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

// let num = 0
// const clockId = setInterval(()=>{
//     num++
//     if (num> 7) {
//         clearInterval(clockId)
//     }
//     console.log(clockId, num);
    
// }, 2000)

let num = 0
const interbalId = setInterval(() => {
   num++ 
   if (interbalId > 7) {
    clearInterval(interbalId)
   }
   console.log(interbalId, num);
}, 2000)