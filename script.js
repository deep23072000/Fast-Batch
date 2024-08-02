const reg = ()=>{
   
     let nam = document.querySelector('#nam').value;
     let username = document.querySelector('#username').value;
     let mobile = document.querySelector('#mobile').value;
     let image = document.querySelector('#image').value;
     let password = document.querySelector('#password').value;
     let cpassword = document.querySelector('#cpassword').value;

     console.log(nam,username,mobile,password,cpassword);

     let information = {
        "name":nam,
        "username":username,
        "mobile":mobile,
        "image":image,
        "password":password,
        "cpassword":cpassword
     }

     let url = 'http://localhost:4000/registration';
     let method = {
      method:"POST",
      headers:{
         'content-type':'application/json'
      },
      body:JSON.stringify(information)
     }

     fetch(url,method);
     window.location.href = "login.html";

     
}

const login = async ()=>{

   let data = await fetch('http://localhost:4000/registration');
   let response =await data.json();
   let username = document.querySelector('#username').value;
   let password = document.querySelector('#password').value;
   
   let finded_val = response.find(e=>e.username === username && e.password === password);
   
   if(finded_val){
   window.localStorage.setItem('login_information',JSON.stringify(finded_val));
   window.location.href = "home.html"
   }else{
      window.alert = "please register";
   window.location.href = "registration.html"


   }
   
}






