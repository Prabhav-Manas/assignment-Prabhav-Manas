document.getElementById('login-form').addEventListener('submit', (event)=>{
  event.preventDefault(); //Prevents Default Form Submission

  let userNameInput=document.getElementById('username')
  let passwordInput=document.getElementById('password')

  let userName=userNameInput.value.trim(); //Store Username input value & remove white-space from both ends
  let password=passwordInput.value.trim(); //Store Username input value & remove white-space from both ends
  let errorMessage=document.getElementById('error-message'); //Store Error Messages to the variable

  if(userName==='' || password===''){
    errorMessage.textContent = 'Invalid Fields! Input Fields can not be empty. ';
  }else{
    userNameInput.value=''; //Clear username input field
    passwordInput.value=''; //Clear password input field
    errorMessage.textContent=''; //Clear error-message
    console.log('Form Submitted!');
  }
})