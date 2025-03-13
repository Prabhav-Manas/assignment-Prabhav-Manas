document.addEventListener("DOMContentLoaded", ()=>{
  const userList=document.querySelector("#user-list ul"); //Select the unordered list with id user-list

  // ===Add New User===
  const newUser=document.createElement('li'); //Create new list
  newUser.textContent='David'; //Set the text content as David
  userList.appendChild(newUser); //Append the new user list

  // ===Remove First User===
  const firstUser=userList.querySelector('li'); //Select the first user from the list
  if(firstUser) userList.removeChild(firstUser) //If the first user exists remove it
})