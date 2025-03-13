const myDebounce=(callback, delay)=>{
  let timer;

  return function(...args){
    if(timer) clearTimeout(timer);

    timer=setTimeout(()=>{
      callback()
    }, delay)
  }
}

const myFunc=()=>{
  console.log('Function execution with debouncing!');
}

const debounceFunc=myDebounce(myFunc, 1000);

debounceFunc();
