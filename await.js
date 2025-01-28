function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then ((res)=> res.json())
    .then ((data => console.log(data)))
    .catch (error =>(console.error(error)))
}

async function loaduserAwait() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    
}

const loaduserArrow = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    
}

const loaduserCatch = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    }
    catch{
        
    }
    
}