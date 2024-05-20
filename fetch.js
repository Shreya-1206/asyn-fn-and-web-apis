console.log("Start");

setTimeout(() =>{
    console.log("Callback function of setTimeOut")
});

fetch('https://random-user.p.rapidapi.com/getuser')
.then(() => {
    console.log("Callback function of fetch")
});

console.log("End");

/// microtask queue comes here for fetch(because of promises) and mutation observer.