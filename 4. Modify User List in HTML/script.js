document.addEventListener("DOMContentLoaded", ()=>{
  const userList=document.querySelector("#user-list ul");

  // ===Add New User===
  const newUser=document.createElement('li');
  newUser.textContent='David';
  userList.appendChild(newUser);

  // ===Remove First User===
  const firstUser=userList.querySelector('li');
  if(firstUser) userList.removeChild(firstUser)
})