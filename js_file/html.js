

// const form = document.querySelector("#mainForm");
// const fname = document.querySelector("#fName");
// const lname = document.querySelector("#lName");
// const email = document.querySelector("#email");
// const phon = document.querySelector("#phone");
// const pwsd = document.querySelector("#pswd");
// const cnpwsd = document.querySelector("#cnpswd");
// const toggleBtn = document.querySelector("#toggle")
// const myBtn = document.querySelector(".button1");
// const toggleBtn2 = document.querySelector("#toggle2")
// const x = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
// const password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// form.addEventListener('submit', (e)=>{

    
//     e.preventDefault();

//     if(fname.value.length > 1 &&
//         lname.value.length > 1 &&
//         email.value.match(x) &&
//         phon.value.length === 11 &&
//         pwsd.value.match(password)&&
//         cnpwsd.value === pwsd.value
        
//         ){
//             // alert('done!!!')
            
//     }else{
//         alert('Error!!!');
//     }
// })

// fname.addEventListener('input', ()=> {
//     if(fname.value.length > 1){
//         fname.parentElement.className= "suc";
//     }else{
//         fname.parentElement.className= "error";
//     }
// });

// lname.addEventListener('input', ()=> {
//     if(lname.value.length > 1){
//         lname.parentElement.className= "suc";
//     }else{
//         lname.parentElement.className= "error";
//     }
// });

// email.addEventListener('input',()=>{

//     if(email.value.match(x)){
//         email.parentElement.className = "suc";
//     }else{
//         email.parentElement.className = "error";
//     }

// } );

// phon.addEventListener('input', ()=> {
//     if(phon.value.length === 11){
//         phon.parentElement.className= "suc";
//     }else{
//         phon.parentElement.className= "error";
//     }

// });

// pwsd.addEventListener('input', ()=>{
   
//     if(pwsd.value.match(password)){
//         pwsd.parentElement.className = "suc";
//     }else{
//         pwsd.parentElement.className= "error";
//     }
// });

// cnpwsd.addEventListener('input', ()=> {
//     if(cnpwsd.value === pwsd.value){
//         cnpwsd.parentElement.className= "suc";
//     }else{
//         cnpwsd.parentElement.className= "error";
//     }

// });

// toggleBtn.addEventListener('click',  ()=> {
    
//     if(pswd.getAttribute('type') === 'password'){
//         pswd.setAttribute('type', 'text');
//         toggleBtn.style.color='#000';
//     }else{
//         pswd.setAttribute('type', 'password');
//         toggleBtn.style.color='rgb(134, 128, 128)';
//     }
    
    
    
// });


// toggleBtn2.addEventListener('click',  ()=> {
    
//     if(cnpswd.getAttribute('type') === 'password'){
//         cnpswd.setAttribute('type', 'text');
//         toggleBtn2.style.color='#000';
//     }else{
//         cnpswd.setAttribute('type', 'password');
//         toggleBtn2.style.color='rgb(134, 128, 128)';
//     }
    
    
    
// });
'use strict'
const from = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const maile = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pass = document.querySelector("#pass");
const cnpass = document.querySelector("#cnpass");
const mybtn = document.querySelector(".sbtn");
const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");

const passw = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

from.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(fname.value.length > 1 && 
        lname.value.length > 1 &&
        maile.value.match(passw) &&
        phone.value.length === 11 &&
        pass.value.match(password) &&
        cnpass.value === pass.value

        ){

            alert('done!!')

    }else{
        alert('Error!!!')
    }
    

});

fname.addEventListener('input', ()=>{
    if(fname.value.length > 1){
        fname.parentElement.className = 'succes';
    }else{
        fname.parentElement.className = 'er'
        
    }
});

lname.addEventListener('input', ()=>{
    if(lname.value.length > 1){
        lname.parentElement.className = 'succes';
    }else{
        lname.parentElement.className = 'er'
        
    }
});

maile.addEventListener('input', ()=>{
    if(maile.value.match(passw)){
        maile.parentElement.className = 'succes';
    }else{
        maile.parentElement.className = 'er'
    }
})

phone.addEventListener('input', ()=>{
    if(phone.value.length === 11){
        phone.parentElement.className = 'succes';
    }else{
        phone.parentElement.className = 'er'
    }
});

pass.addEventListener('input', ()=>{
    if(pass.value.match(password)){
        pass.parentElement.className = 'succes';
    }else{
        pass.parentElement.className = 'er'
    }
});

cnpass.addEventListener('input', ()=>{
    if(cnpass.value === pass.value){
        cnpass.parentElement.className = 'succes';
    }else{
        cnpass.parentElement.className = 'er'
    }
});

toggle1.addEventListener('click', ()=>{
    if(pass.getAttribute('type')==='password'){
        pass.setAttribute('type', 'text')
    }else{
        pass.setAttribute('type', 'password')
    }

})

toggle2.addEventListener('click', ()=>{
    if(cnpass.getAttribute('type')==='password'){
        cnpass.setAttribute('type', 'text')
    }else{
        cnpass.setAttribute('type', 'password')
    }

})

