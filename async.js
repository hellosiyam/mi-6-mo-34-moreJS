// // const myLoder = () =>{
// //     return new Promise ((resolbe, reject) =>{
// //         const sucess = Math.random()
// //         if (sucess >= 0.4) {
// //             resolbe( sucess) //'This value is sucess',
// //         }
// //         else{
// //             reject(  sucess) //'This value is reject',
// //         }
// //     })
// // }

// const { reject } = require("async");

// // const { log } = require("async");

// const myLoder = () => {
//     return new Promise((resolve, reject) => {
//         const sucess = Math.random();
//         if (sucess <= 0.55) {
//             resolve(sucess)
//         }else{
//             reject(sucess)
//         }
//     })
// }

// myLoder()
// .then(data => console.log('resolve Data', data))
// .catch(error => console.error('error data', error))


// async function loadData() {
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data);
    
// }

// loadData();

// const shortData = async () => {
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data);
    
// }

// shortData();


// const taskLoder = async () => {
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data);
// }

// taskLoder();


const myPromise = () => {
    return new Promise((resolve, reject) => {
        const sucess = Math.random();
        if (sucess >= 0.55) {
            resolve(sucess);
        }else{
            reject(sucess)
        }
    })
}


myPromise()

const myLoder = async () => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
    
}

myLoder()