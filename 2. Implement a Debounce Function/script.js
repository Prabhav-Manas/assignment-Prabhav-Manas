const myDebounce=(callback, delay)=>{
  let timer;

  return function(...args){ //Returns a new function that takes an argument
    if(timer) clearTimeout(timer); //Clear out the previous timer if a new call is made

    timer=setTimeout(()=>{
      callback(...args) //Execute the callback with the provided arguments after the delay
    }, delay)
  }
}

// Function to check debouncing
const myFunc=(name)=>{
  console.log(`Hello, ${name}!`);
}

// Debounce function with 1-second delay
const debounceFunc=myDebounce(myFunc, 1000);

// Call the debounced function
debounceFunc('Prabhav'); //Will log "Hello, Prabhav" after 1-second delay
