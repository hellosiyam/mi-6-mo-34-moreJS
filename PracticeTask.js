// Practice Task - 1

Task-a 
setTimeout(()=>{
    console.log('Hello');
    
}, 5000)

// Task-b
const delayGretings = (name, dileyTime) =>{
    setTimeout(()=>{
        console.log('Hello'+ ' ' + name);
    },dileyTime)
}

delayGretings("Alice", 5000)

// Practice Task - 2

function telljoke() {
    console.log("Why dont scientists trust almos? Beacuse they make up evrything !");
    
}
const jokeInterval =  setInterval(()=>{
    telljoke()
}, 2000)

setTimeout(()=>{
    clearInterval(jokeInterval)
}, 10000)



// Practice Task - 3

const jocke = async () =>{
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json(); 
    console.log(data);
}