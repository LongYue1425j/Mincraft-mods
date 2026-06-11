
const email_input=document.getElementById("email");
const password_input=document.getElementById("password");
const forget=document.getElementById("forget");
const Box_sign=document.getElementById("box1");
const Box_login=document.getElementById("box2");
const btn_1=document.getElementById("click");
const btn2=document.getElementById("btn1");
const txt1=document.getElementById('txt1');
const txt2=document.getElementById('txt2');
const btn3=document.getElementById('btn3');
const form_login=document.getElementById("form-login");
const meter1=document.getElementById("meter1");
let percent=0;
const meter2=document.getElementById("meter2");
meter2.style.display="none";
btn_1.addEventListener('click',event=>{
    if(email_input.value.includes("@gmail.com")){
        if(email_input.value===localStorage.getItem('Gmail')&&password_input.value===localStorage.getItem('Password')){
         
        setTimeout(()=>{
        percent=0.25;
        meter1.value=percent;
        },1500);
        setTimeout(()=>{
        percent=0.50;
        meter1.value=percent;
        },2500);
        setTimeout(()=>{
        percent=0.75;
        meter1.value=percent;
        },3500);
        setTimeout(()=>{
        percent=1;
        console.log("Login succes");
        window.location.href="MincraftMods.html";
        meter1.value=percent;
        },4500);}
    }else{
       console.error('Email does not have @gmail.com');
    }
});
//parking space 🤣
const input_firstname=document.createElement('input');
input_firstname.placeholder="Firstname";
const input_Surname=document.createElement('input');
input_Surname.placeholder="Surname";
const input_Age=document.createElement('input');
input_Age.type="date";
const input_Email=document.createElement('input');
input_Email.type="email";
input_Email.placeholder="..........@gmail.com";
const input_Password=document.createElement('input');
input_Password.type="password";
input_Password.placeholder="password";
const facebook_resource=document.getElementById("facebook");
const insta_resource=document.getElementById("insta");
const X_resource=document.getElementById("X");
const first_txt=document.getElementById('first');
const second_txt=document.getElementById("second");
const btn_for_login=document.createElement("button");
console.log(btn_1);
console.log(btn2);
btn_for_login.id="btn_for_login";
btn_for_login.textContent="Sign-up";
const btn_accept_login=document.createElement("button");
btn_accept_login.textContent="Check it";
btn_accept_login.id="btn_for_login";
btn2.addEventListener('click',event=>{
    meter1.style.display="none";
     Box_login.style.transform="translate(-400px)";
     Box_login.style.borderBottomRightRadius="0px";
     Box_login.style.borderTopRightRadius="0px";
     Box_login.style.borderTopLeftRadius="10px";
     Box_login.style.borderBottomLeftRadius="10px";
     Box_sign.style.transform="translate(400px)";
     Box_sign.style.borderBottomRightRadius="10px";
     Box_sign.style.borderTopRightRadius="10px";
     Box_sign.style.borderTopLeftRadius="0px";
     Box_sign.style.borderBottomLeftRadius="0px";
     txt1.textContent="Sign up";
     txt2.textContent="Entre your name & surname & age and your email address and its password";
     input_firstname.classList.add('loop');
     input_Surname.classList.add('loop');
     input_Age.classList.add('loop');
     input_Email.classList.add('loop');
     input_Password.classList.add('loop');
     form_login.appendChild(input_firstname);
     form_login.appendChild(input_Surname);
     form_login.appendChild(input_Age);
     form_login.appendChild(input_Email);
     form_login.appendChild(input_Password);
     input_firstname.style.translate="0px -5rem";
     input_Surname.style.translate="0px -4rem";
     input_Age.style.translate="0px -3rem";
     input_Email.style.translate="0px -2rem";
     input_Password.style.translate="0px -1rem";
     btn2.style.display='none';
     first_txt.textContent="Hello My friend";
     facebook_resource.style.display="none";
     insta_resource.style.display="none";
     X_resource.style.display="none";
     email_input.style.display="none";
     password_input.style.display='none';
     forget.style.display='none';
     second_txt.textContent="if you want login to your account it mean is you had account and you want use and continue with that you can click on below button";
     btn_1.style.display="none";
     btn3.style.translate="9rem";
     btn3.style.height="40px";
     btn3.style.fontSize="26px";
     btn3.style.display="block";
    Box_login.appendChild(btn_check_in);
    btn_check_in.style.translate="0px -30px";
    meter2.style.translate="160px 15px";
     meter2.style.display="block";
});
const resplace=document.getElementById('resc');
const div1=document.createElement('div');
btn3.addEventListener('click',event=>{
    meter1.style.display="block";
    meter1.style.translate="160px 55px";
    meter2.style.display="none";
    resplace.style.display='flex';
    resplace.appendChild(facebook_resource);
    Box_login.removeChild(btn_check_in);
    resplace.appendChild(insta_resource);
    resplace.appendChild(X_resource);
    resplace.style.marginLeft="9rem";
    X_resource.style.translate="15px 1px";
    insta_resource.style.translate="10px";
    facebook_resource.style.translate="5px";
     Box_login.style.transform="translate(0px)";
     Box_login.style.borderBottomRightRadius="10px";
     Box_login.style.borderTopRightRadius="10px";
     Box_login.style.borderTopLeftRadius="0px";
     Box_login.style.borderBottomLeftRadius="0px";
     Box_sign.style.transform="translate(-0px)";
     Box_sign.style.borderBottomRightRadius="0px";
     Box_sign.style.borderTopRightRadius="0px";
     Box_sign.style.borderTopLeftRadius="10px";
     Box_sign.style.borderBottomLeftRadius="10px";
     form_login.removeChild(input_firstname);
     form_login.removeChild(input_Surname);
     form_login.removeChild(input_Age);
     form_login.removeChild(input_Email);
     form_login.removeChild(input_Password);
     txt2.textContent="if you want sign up and create new account for yourself and continue with that you must click on below button";
     first_txt.textContent="Log-in";
     facebook_resource.style.display="block";
     insta_resource.style.display="block";
     X_resource.style.display="block";
     email_input.style.display="block";
     password_input.style.display='block';
     forget.style.display='block';
     second_txt.textContent="Entre your email address and your password";
     txt1.textContent="Hello My friend";
     email_input.style.marginLeft="4.2rem";
     email_input.style.marginTop="1rem";
     password_input.style.marginLeft="4.2rem";
     password_input.style.marginTop="-1rem";
     forget.style.marginRight="1.50rem";
     forget.style.marginTop="-0.50rem";
     btn_1.style.display="block";
     btn_1.style.translate="9rem 0.60rem";
     btn3.style.display="none";
     Box_sign.appendChild(btn_1);
     btn_accept_login.style.display="none";
     Box_login.appendChild(btn_for_login);
     btn_for_login.textContent="Login";
});
const btn_check_in=document.createElement('button');
btn_check_in.textContent="Check it";
btn_check_in.id="btn_for_login";
btn_for_login.addEventListener('click',event=>{
    meter1.style.display="none";
    meter2.style.display="block";
    Box_login.removeChild(btn_for_login);
    Box_login.appendChild(btn_check_in);
     Box_login.style.transform="translate(-400px)";
     Box_login.style.borderBottomRightRadius="0px";
     Box_login.style.borderTopRightRadius="0px";
     Box_login.style.borderTopLeftRadius="10px";
     Box_login.style.borderBottomLeftRadius="10px";
     Box_sign.style.transform="translate(400px)";
     Box_sign.style.borderBottomRightRadius="10px";
     Box_sign.style.borderTopRightRadius="10px";
     Box_sign.style.borderTopLeftRadius="0px";
     Box_sign.style.borderBottomLeftRadius="0px";
     txt1.textContent="Sign up";
     txt2.textContent="Entre your name & surname & age and your email address and its password";
     input_firstname.classList.add('loop');
     input_Surname.classList.add('loop');
     input_Age.classList.add('loop');
     input_Email.classList.add('loop');
     input_Password.classList.add('loop');
     form_login.appendChild(input_firstname);
     form_login.appendChild(input_Surname);
     form_login.appendChild(input_Age);
     form_login.appendChild(input_Email);
     form_login.appendChild(input_Password);
     input_firstname.style.translate="0px -5rem";
     input_Surname.style.translate="0px -4rem";
     input_Age.style.translate="0px -3rem";
     input_Email.style.translate="0px -2rem";
     input_Password.style.translate="0px -1rem";
     first_txt.textContent="Hello My friend";
     facebook_resource.style.display="none";
     insta_resource.style.display="none";
     X_resource.style.display="none";
     email_input.style.display="none";
     password_input.style.display='none';
     forget.style.display='none';
     second_txt.textContent="if you want login to your account it mean is you had account and you want use and continue with that you can click on below button";
     btn_1.style.display="none";
     btn3.style.translate="9rem";
     btn3.style.height="40px";
     btn3.style.fontSize="26px";
     btn3.style.display="block";
});
const Message_for_you=document.createElement("p");
Message_for_you.textContent="You had an account please login";
let inputs=[input_firstname,input_Surname,input_Age,input_Email,input_Password];
 inputs.forEach(any=>{
    any.addEventListener('keydown',event=>{
        if(event.key==" "){
          event.preventDefault();
        }
    });
   });
btn_check_in.addEventListener('click',event=>{
   let information=[input_firstname.value,input_Surname.value,input_Age.value,input_Email.value,input_Password.value];
   if(input_Email.value.includes("@gmail.com")){
    if(localStorage.getItem("Gmail")===input_Email.value&&localStorage.getItem("Password")===input_Password.value){
     Box_login.appendChild(Message_for_you);
    }else{
 input_firstname.value="";
    input_Surname.value="";
    input_Age.value="";
    input_Email.value="";
    input_Password.value="";
    localStorage.setItem("User information",information);
     localStorage.getItem("User information").split(',');
     localStorage.setItem("Gmail",information[3]);
     localStorage.getItem("Gmail");
     localStorage.setItem("Password",information[4]);
     localStorage.getItem("Password");

   setTimeout(()=>{
        percent=0.25;
        meter2.value=percent;
        },1500);
        setTimeout(()=>{
        percent=0.50;
        meter2.value=percent;
        },2500);
        setTimeout(()=>{
        percent=0.75;
        meter2.value=percent;
        },3500);
        setTimeout(()=>{
        percent=1;
        console.log("Login succes");
        window.location.href="MincraftMods.html";
        meter2.value=percent;
        },4500);}

   }else{
    console.error("The Email is not true");
   }
})