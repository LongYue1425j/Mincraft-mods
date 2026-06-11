
const Models=document.querySelectorAll(".mods");
const Introductions=document.querySelectorAll(".introduction");
const Informations=document.querySelectorAll('.informations');
let Text_about=document.createElement("p");
const close_intro=document.createElement("h3");
close_intro.id="close1";
close_intro.textContent='\u2716';
close_intro.style.cursor="pointer";
for(let any=0;any<Informations.length;any++){
Informations[any].addEventListener('click',event=>{
    if(any==0){
        Introductions[any].style.display="block";
     Text_about.textContent="This mod can give you More than 100 Swords and diffrent and with new abilities you can have good exprience with this mod";
     Text_about.style.marginTop="-2rem";
     close_intro.style.translate="7rem 4.5rem";
     Introductions[any].appendChild(close_intro);
     Introductions[any].appendChild(Text_about);
     Informations[0].style.marginTop="-15rem";
    }else if(any==1){
      Introductions[any].style.display="block";
     Text_about.textContent="This mod give you 3D HD Texture you can experience mincraft with good rezolousion and with good shader";
     Text_about.style.marginTop="-2rem";
     close_intro.style.translate="7rem 4.5rem";
     Introductions[any].appendChild(close_intro);
     Introductions[any].appendChild(Text_about);
     Informations[1].style.marginTop="-15rem";
    }else if(any==2){
      Introductions[any].style.display="block";
     Text_about.textContent="this mod can give Good Experience and reality life with 4-season";
     Text_about.style.marginTop="-2rem";
     close_intro.style.translate="7rem 4.5rem";
     Introductions[any].appendChild(close_intro);
     Introductions[any].appendChild(Text_about);
     Informations[2].style.marginTop="-15rem";
    }else if(any==3){
      Introductions[any].style.display="block";
     Text_about.textContent="in this mod you can use lots of flags in the mincraft you can have your nationalety's flag of your country";
     Text_about.style.marginTop="-2rem";
     close_intro.style.translate="7rem 4.5rem";
     Introductions[any].appendChild(close_intro);
     Introductions[any].appendChild(Text_about);
     Informations[3].style.marginTop="-15rem";
    }else if(any==4){
      Introductions[any].style.display="block";
     Text_about.textContent="in this mod you can use furniture for your home and make beautiful house. in this mode you can experience sofa,arm chair ,light bulb , burner,stove,carpet,heater, computer,television,radio,bed,curtain or drapes it's can help you to have good life";
     Text_about.style.marginTop="-2rem";
     close_intro.style.translate="7rem 4.5rem";
     Introductions[any].appendChild(close_intro);
     Introductions[any].appendChild(Text_about);
     Informations[4].style.marginTop="-15rem";
    }
})
}
close_intro.addEventListener('click',event=>{
    Introductions.forEach(any=>{
        any.style.display="none";
        Informations[0].style.marginTop="1rem";
        Informations[1].style.marginTop="1rem";
        Informations[2].style.marginTop="1rem";
        Informations[3].style.marginTop="1rem";
        Informations[4].style.marginTop="1rem";
    
    })
});
const Introductions1=document.querySelectorAll(".introduction1");
const Informations1=document.querySelectorAll(".informations1");
const Lucks=document.querySelectorAll(".luck");
const main=document.getElementById("main");
let form=document.createElement("form");
form.style.translate="0px -170rem";
form.id="signup";
const h1=document.createElement("h1");
h1.textContent="Signup";
const h3=document.createElement("h3")
h3.textContent="You Need Create an Account or Login to your account to Have access to Especial mods ";
//For Name
const label_name=document.createElement("label")
label_name.textContent="Firstname:";
const input_name=document.createElement("input");
input_name.id="name";
input_name.className="inputs";
input_name.placeholder="Firstname...";
//Br
const Br1=document.createElement("br");
const Br2=document.createElement("br");
const Br3=document.createElement("br");
const Br4=document.createElement("br");
const Br5=document.createElement("br");
const Br6=document.createElement("br");
const Br7=document.createElement("br");
const Br8=document.createElement("br");
const Br9=document.createElement("br");
const Br10=document.createElement("br");
const Br11=document.createElement("br");
const Br12=document.createElement("br");
//For Lastname
const label_lastname=document.createElement("label");
label_lastname.textContent="Surname:";
const input_lastname=document.createElement("input");
input_lastname.id="lastname";
input_lastname.className="inputs";
input_lastname.placeholder="Surname...";
//For Age
const label_age=document.createElement("label");
label_age.textContent="Age:";
const input_age=document.createElement("input");
input_age.type="number";
input_age.max=45;
input_age.min=5;
input_age.id="age";
input_age.className="inputs";
// For Email
const label_email=document.createElement("label");
label_email.textContent="Email:";
const input_email=document.createElement("input");
input_email.type="email";
input_email.id="email";
input_email.className="inputs";
input_email.placeholder=".......@gmail.com";
//For Password
const label_password=document.createElement("label");
label_password.textContent="Password:";
const input_password=document.createElement("input");
input_password.type="password";
input_password.id="password";
input_password.className="inputs";
input_password.placeholder="...........";
//Close
const close_btn=document.createElement("button");
close_btn.textContent='✖';
close_btn.id="Close";

//Sumbit
const Sumbit=document.createElement("button");
Sumbit.id="sumbit";
Sumbit.className="btn";
Sumbit.textContent="Sumbit";
//Clear
const Clear=document.createElement("button");
Clear.id="clear";
Clear.className="btn";
Clear.textContent="Clear";

form.addEventListener('click',event=>{
    event.preventDefault();
});
//Clock
function DateNow(){
let Now=new Date();
let Hour=Now.getHours()%12||12;
let Time=Hour<=12 ? ".PM" : ".AM";
Hour=Hour.toString().padStart(2,0);
let Minute=Now.getMinutes().toString().padStart(2,0);
let Second=Now.getSeconds().toString().padStart(2,0);
document.getElementById("Clock").textContent=`${Hour}:${Minute}:${Second+""+Time}`;
}
DateNow();
setInterval(DateNow);
//Form
const header=document.getElementById("head");
const body=document.getElementById("main");
const footer=document.getElementById("foot");
const moon=document.getElementById("moon");
const feet=document.getElementById("footm");
console.log(feet);
console.log(moon);
Lucks.forEach(any=>{
    any.addEventListener('click',event=>{
     moon.style.filter="saturate(5%)";
     moon.style.transition="1s";
     feet.style.filter="saturate(5%)";
     feet.style.transition="1s";
        form.style.display="block";
        form.style.marginLeft="43rem";
        form.style.marginTop="-135rem";
    header.style.transition="1s";
    body.style.transition="1s";
    footer.style.transition="1s";
    form.style.transition="1s";
     menu_icon.style.rotate="0deg";
     for_menu.style.marginLeft="-18rem";
        form.appendChild(close_btn);
        form.appendChild(h1);
        form.appendChild(h3);
        form.appendChild(label_name);
        form.appendChild(input_name);
        form.appendChild(Br1);
        form.appendChild(Br2);
        form.appendChild(label_lastname);
        form.appendChild(input_lastname);
        form.appendChild(Br3);
        form.appendChild(Br4);
        form.appendChild(label_age);
        form.appendChild(input_age);
        form.appendChild(Br5);
        form.appendChild(Br6);
        form.appendChild(label_email);
        form.appendChild(input_email);
        form.appendChild(Br7);
        form.appendChild(Br8);
        form.appendChild(label_password);
        form.appendChild(input_password);
        form.appendChild(Br9);
        form.appendChild(Br10);
        form.appendChild(Sumbit);
        form.appendChild(Br11);
        form.appendChild(Br12);
        form.appendChild(Clear);
        header.appendChild(form);
         body.appendChild(form);
         footer.appendChild(form);



         if(Signup.addEventListener('click',event=>{
            form.style.marginRight="45rem";
         })){}})});

//nuClear btn😂
Clear.addEventListener('click',event=>{
    input_name.value="";
    input_lastname.value="";
    input_age.value="";
    input_email.value="";
    input_password.value="";
    console.log("Information of Form Deleted");
});
close_btn.addEventListener('click',event=>{
    form.style.display="none";
    header.classList.remove("blured");
    header.style.transition="1s";
        body.classList.remove("blured");
    body.style.transition="1s";
        footer.classList.remove("blured");
    footer.style.transition="1s";
    form.style.transition="1s";
    moon.style.filter="saturate(100%)";
    moon.style.transition="1s";
     feet.style.filter="saturate(100%)";
     feet.style.transition="1s";
});
console.log(form);
const Message_for_sign=document.createElement('p');
Message_for_sign.textContent="You had an account";
Sumbit.addEventListener('click',event=>{


   if(input_email.value.includes("@gmail.com")){
     form.style.display="none";
    header.classList.remove("blured");
    header.style.transition="1s";
        body.classList.remove("blured");
    body.style.transition="1s";
        footer.classList.remove("blured");
    footer.style.transition="1s";
    form.style.transition="1s";
    let User=[input_name.value,input_lastname.value,input_age.value,input_email.value,input_password.value];
    if(input_email.value===localStorage.getItem("Gmail")&&input_password.value===localStorage.getItem('Password')){
    form.appendChild(Message_for_sign);
    }else{
         localStorage.setItem('Gmail',input_email.value);
    localStorage.setItem('Password',input_password.value);
    localStorage.setItem('User information',User);
    alert("Please you should Refresh the Page");
    input_name.value="";
    input_lastname.value="";
    input_age.value="";
    input_email.value="";
    input_password.value="";
    }
   }else{
     alert("Email is Not True");
     console.warn("Email had a wrong");
    input_name.value="";
    input_lastname.value="";
    input_age.value="";
    input_email.value="";
    input_password.value="";
   }
});
Lucks.forEach(any=>{
    any.addEventListener('click',event=>{
        window.alert("You Should Create an Account to Have Access Premium Mods");
    })
});
const Text_Welcome=document.getElementById("account");
window.onload=function(){
    localStorage.getItem("User information");
    if(localStorage.getItem("User information")===null){
     console.warn("User doesn't has account");
     Lucks.forEach(any=>{
            any.style.display="block";
        });

    Informations1[0].addEventListener('click',event=>{
    Introductions1[0].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[0].appendChild(close_intro);
     Introductions1[0].appendChild(Text_about);
     Informations1[0].style.marginTop="-6rem";
});
 Informations1[1].addEventListener('click',event=>{
    Introductions1[1].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[1].appendChild(close_intro);
     Introductions1[1].appendChild(Text_about);
     Informations1[1].style.marginTop="-6rem";
});
 Informations1[2].addEventListener('click',event=>{
    Introductions1[2].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[2].appendChild(close_intro);
     Introductions1[2].appendChild(Text_about);
     Informations1[2].style.marginTop="-6rem";
});
 Informations1[3].addEventListener('click',event=>{
    Introductions1[3].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[3].appendChild(close_intro);
     Introductions1[3].appendChild(Text_about);
     Informations1[3].style.marginTop="-6rem";
});
Informations1[4].addEventListener('click',event=>{
    Introductions1[4].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[4].appendChild(close_intro);
     Introductions1[4].appendChild(Text_about);
     Informations1[4].style.marginTop="-6rem";
});
Informations1[5].addEventListener('click',event=>{
    Introductions1[5].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[5].appendChild(close_intro);
     Introductions1[5].appendChild(Text_about);
     Informations1[5].style.marginTop="-6rem";
});
Informations1[6].addEventListener('click',event=>{
    Introductions1[6].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[6].appendChild(close_intro);
     Introductions1[6].appendChild(Text_about);
     Informations1[6].style.marginTop="-6rem";
});
Informations1[7].addEventListener('click',event=>{
    Introductions1[7].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[7].appendChild(close_intro);
     Introductions1[7].appendChild(Text_about);
     Informations1[7].style.marginTop="-6rem";
});
Informations1[7].addEventListener('click',event=>{
    Introductions1[7].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[7].appendChild(close_intro);
     Introductions1[7].appendChild(Text_about);
     Informations1[7].style.marginTop="-6rem";
});
Informations1[8].addEventListener('click',event=>{
    Introductions1[8].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[8].appendChild(close_intro);
     Introductions1[8].appendChild(Text_about);
     Informations1[8].style.marginTop="-6rem";
});
Informations1[8].addEventListener('click',event=>{
    Introductions1[8].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[8].appendChild(close_intro);
     Introductions1[8].appendChild(Text_about);
     Informations1[8].style.marginTop="-6rem";
});
Informations1[9].addEventListener('click',event=>{
    Introductions1[9].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[9].appendChild(close_intro);
     Introductions1[9].appendChild(Text_about);
     Informations1[9].style.marginTop="-6rem";
});
Informations1[9].addEventListener('click',event=>{
    Introductions1[9].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[9].appendChild(close_intro);
     Introductions1[9].appendChild(Text_about);
     Informations1[9].style.marginTop="-6rem";
});
Informations1[10].addEventListener('click',event=>{
    Introductions1[10].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[10].appendChild(close_intro);
     Introductions1[10].appendChild(Text_about);
     Informations1[10].style.marginTop="-6rem";
});
Informations1[11].addEventListener('click',event=>{
    Introductions1[11].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[11].appendChild(close_intro);
     Introductions1[11].appendChild(Text_about);
     Informations1[11].style.marginTop="-6rem";
});
Informations1[12].addEventListener('click',event=>{
    Introductions1[12].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[12].appendChild(close_intro);
     Introductions1[12].appendChild(Text_about);
     Informations1[12].style.marginTop="-6rem";
});
Informations1[13].addEventListener('click',event=>{
    Introductions1[13].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[13].appendChild(close_intro);
     Introductions1[13].appendChild(Text_about);
     Informations1[13].style.marginTop="-6rem";
});
Informations1[14].addEventListener('click',event=>{
    Introductions1[14].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[14].appendChild(close_intro);
     Introductions1[14].appendChild(Text_about);
     Informations1[14].style.marginTop="-6rem";
});
Informations1[15].addEventListener('click',event=>{
    Introductions1[15].style.display="block";
     Text_about.textContent="Not found anything... I think you should create account";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 3.5rem";
     Introductions1[15].appendChild(close_intro);
     Introductions1[15].appendChild(Text_about);
     Informations1[15].style.marginTop="-6rem";
});
        close_intro.addEventListener('click',event=>{
    Introductions1.forEach(any=>{
        any.style.display="none";
        Informations1[0].style.marginTop="1rem";
        Informations1[1].style.marginTop="1rem";
        Informations1[2].style.marginTop="1rem";
        Informations1[3].style.marginTop="1rem";
        Informations1[4].style.marginTop="1rem";
        Informations1[5].style.marginTop="1rem";
        Informations1[6].style.marginTop="1rem";
        Informations1[7].style.marginTop="1rem";
        Informations1[8].style.marginTop="1rem";
        Informations1[9].style.marginTop="1rem";
        Informations1[10].style.marginTop="1rem";
        Informations1[11].style.marginTop="1rem";
        Informations1[12].style.marginTop="1rem";
        Informations1[13].style.marginTop="1rem";
        Informations1[14].style.marginTop="1rem";
        Informations1[15].style.marginTop="1rem";
    })
});
    }else{
        Lucks.forEach(any=>{
            any.style.display="none";
        });
        Text_Welcome.textContent="Welcome my friend to my website 😊";
        Informations1.forEach(each=>{
            each.style.marginTop="220px";
        });
        
    Informations1[0].addEventListener('click',event=>{
    Introductions1[0].style.display="block";
    Introductions1[0].style.marginTop="10rem";
    Introductions1[0].style.height="160px";
     Text_about.textContent="This is a premium mod ! you can Experience bicycle in the game . it has many and different bicycles and it's very natural . i'm sure you'll good experience with this mod";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[0].appendChild(close_intro);
     Introductions1[0].appendChild(Text_about);
     Informations1[0].style.marginTop="-6rem";
});
 Informations1[1].addEventListener('click',event=>{
    Introductions1[1].style.display="block";
    Introductions1[1].style.marginTop="10rem";
    Introductions1[1].style.height="160px";
     Text_about.textContent="This is a premium mod ! lots of furniture in this mod you can use them in the game and have perfect decoration in your home and your gaming room";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 6.5rem";
     Introductions1[1].appendChild(close_intro);
     Introductions1[1].appendChild(Text_about);
     Informations1[1].style.marginTop="-6rem";
});
 Informations1[2].addEventListener('click',event=>{
    Introductions1[2].style.display="block";
    Introductions1[2].style.marginTop="10rem";
    Introductions1[2].style.height="160px";
     Text_about.textContent="This is a premium mod ! this is Horror mod and we prefer children less than 9 years old doesn't experience it reason it has horror sounds and reality thing in the stranger things mod";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[2].appendChild(close_intro);
     Introductions1[2].appendChild(Text_about);
     Informations1[2].style.marginTop="-6rem";
});
 Informations1[3].addEventListener('click',event=>{
    Introductions1[3].style.display="block";
    Introductions1[3].style.marginTop="9rem";
    Introductions1[3].style.height="180px";
     Text_about.textContent="This is a premium mod ! this is Horror mod and we prefer children less than 12 years old doesn't experience it ,reason it has horror sounds and you can see someone or something it has a eye mod";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[3].appendChild(close_intro);
     Introductions1[3].appendChild(Text_about);
     Informations1[3].style.marginTop="-6rem";
});
  Informations1[0].addEventListener('click',event=>{
    Introductions1[0].style.display="block";
    Introductions1[0].style.marginTop="10rem";
    Introductions1[0].style.height="160px";
     Text_about.textContent="This is a premium mod ! you can Experience bicycle in the game . it has many and different bicycles and it's very natural . i'm sure you'll good experience with this mod";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[0].appendChild(close_intro);
     Introductions1[0].appendChild(Text_about);
     Informations1[0].style.marginTop="-6rem";
});
 Informations1[1].addEventListener('click',event=>{
    Introductions1[1].style.display="block";
    Introductions1[1].style.marginTop="10rem";
    Introductions1[1].style.height="160px";
     Text_about.textContent="This is a premium mod ! lots of furniture in this mod you can use them in the game and have perfect decoration in your home and your gaming room";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 6.5rem";
     Introductions1[1].appendChild(close_intro);
     Introductions1[1].appendChild(Text_about);
     Informations1[1].style.marginTop="-6rem";
});
 Informations1[2].addEventListener('click',event=>{
    Introductions1[2].style.display="block";
    Introductions1[2].style.marginTop="10rem";
    Introductions1[2].style.height="160px";
     Text_about.textContent="This is a premium mod ! this is Horror mod and we prefer children less than 9 years old doesn't experience it reason it has horror sounds and reality thing in the stranger things mod";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[2].appendChild(close_intro);
     Introductions1[2].appendChild(Text_about);
     Informations1[2].style.marginTop="-6rem";
});
 Informations1[3].addEventListener('click',event=>{
    Introductions1[3].style.display="block";
    Introductions1[3].style.marginTop="9rem";
    Introductions1[3].style.height="180px";
     Text_about.textContent="This is a premium mod ! this is Horror mod and we prefer children less than 12 years old doesn't experience it ,reason it has horror sounds and you can see someone or something it has a eye mod";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[3].appendChild(close_intro);
     Introductions1[3].appendChild(Text_about);
     Informations1[3].style.marginTop="-6rem";
});
  Informations1[4].addEventListener('click',event=>{
    Introductions1[4].style.display="block";
    Introductions1[4].style.marginTop="10rem";
    Introductions1[4].style.height="160px";
     Text_about.textContent="This is a premium mod ! the disturbed mod is the one of the bests and horror mods in the mincraft. you can experience soul sounds in the dark places";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[4].appendChild(close_intro);
     Introductions1[4].appendChild(Text_about);
     Informations1[4].style.marginTop="-6rem";
});
 Informations1[5].addEventListener('click',event=>{
    Introductions1[5].style.display="block";
    Introductions1[5].style.marginTop="10rem";
    Introductions1[5].style.height="160px";
     Text_about.textContent="This is a premium mod ! shader mod . this mod can't give you higher graphic than natural but in this mod the sun is shining and grasses and leaves are moving";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 6.5rem";
     Introductions1[5].appendChild(close_intro);
     Introductions1[5].appendChild(Text_about);
     Informations1[5].style.marginTop="-6rem";
});
 Informations1[6].addEventListener('click',event=>{
    Introductions1[6].style.display="block";
    Introductions1[6].style.marginTop="10rem";
    Introductions1[6].style.height="160px";
     Text_about.textContent="This is a premium mod ! Best mod in our website is it. we don't say nothing you should experience it alone and with yourself....";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[6].appendChild(close_intro);
     Introductions1[6].appendChild(Text_about);
     Informations1[6].style.marginTop="-6rem";
});
 Informations1[7].addEventListener('click',event=>{
    Introductions1[7].style.display="block";
    Introductions1[7].style.marginTop="9rem";
    Introductions1[7].style.height="180px";
     Text_about.textContent="This is a premium mod ! this mod can provide mobile phone in the game . you can calculate and divide or measure in the application and also you can take photo and that save in the memory";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[7].appendChild(close_intro);
     Introductions1[7].appendChild(Text_about);
     Informations1[7].style.marginTop="-6rem";
});
  Informations1[8].addEventListener('click',event=>{
    Introductions1[8].style.display="block";
    Introductions1[8].style.marginTop="10rem";
    Introductions1[8].style.height="160px";
     Text_about.textContent="This is a premium mod ! Cash machine or ATM in the game and also you can keep your mony in your account and you can use debit or cradit card in the game";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[8].appendChild(close_intro);
     Introductions1[8].appendChild(Text_about);
     Informations1[8].style.marginTop="-6rem";
});
 Informations1[9].addEventListener('click',event=>{
    Introductions1[9].style.display="block";
    Introductions1[9].style.marginTop="-3.5rem";
    Introductions1[9].style.height="160px";
     Text_about.textContent="This is a premium mod ! Bikini button city in the game. Now you can come to spongebob squarspant's home and go to the restraunt Mr.krab";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 6.5rem";
     Introductions1[9].appendChild(close_intro);
     Introductions1[9].appendChild(Text_about);
     Informations1[9].style.marginTop="5rem";
});
 Informations1[10].addEventListener('click',event=>{
    Introductions1[10].style.display="block";
    Introductions1[10].style.marginTop="10rem";
    Introductions1[10].style.height="160px";
     Text_about.textContent="This is a premium mod ! in this mod you have transportation symbols for create road and path and in this mod you have many cars and different cars";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 7rem";
     Introductions1[10].appendChild(close_intro);
     Introductions1[10].appendChild(Text_about);
     Informations1[10].style.marginTop="-6rem";
});
 Informations1[11].addEventListener('click',event=>{
    Introductions1[11].style.display="block";
    Introductions1[11].style.marginTop="9rem";
    Introductions1[11].style.height="180px";
     Text_about.textContent="This is a premium mod ! Best shader mod in our website is it. we don't say nothing you should experience it alone and with yourself....";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[11].appendChild(close_intro);
     Introductions1[11].appendChild(Text_about);
     Informations1[11].style.marginTop="-6rem";
});
 Informations1[12].addEventListener('click',event=>{
    Introductions1[12].style.display="block";
    Introductions1[12].style.marginTop="9rem";
    Introductions1[12].style.height="180px";
     Text_about.textContent="This is a premium mod ! this mod give you a block but if you have it you can do anyhing and create anything";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[12].appendChild(close_intro);
     Introductions1[12].appendChild(Text_about);
     Informations1[12].style.marginTop="-6rem";
});
 Informations1[13].addEventListener('click',event=>{
    Introductions1[13].style.display="block";
    Introductions1[13].style.marginTop="9rem";
    Introductions1[13].style.height="180px";
     Text_about.textContent="This is a premium mod ! this mod provide many and different swords in the game also with different power . you can hand smallest and bigest sword in the game";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[13].appendChild(close_intro);
     Introductions1[13].appendChild(Text_about);
     Informations1[13].style.marginTop="-6rem";
});
 Informations1[14].addEventListener('click',event=>{
    Introductions1[14].style.display="block";
    Introductions1[14].style.marginTop="9rem";
    Introductions1[14].style.height="180px";
     Text_about.textContent="This is a premium mod ! Life in hell dangirous and very defficualt mod and it's mod is hardcore. new monsters add in the game and also this mod has shader you can enable it in the setting of mod";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[14].appendChild(close_intro);
     Introductions1[14].appendChild(Text_about);
     Informations1[14].style.marginTop="-6rem";
});
 Informations1[15].addEventListener('click',event=>{
    Introductions1[15].style.display="block";
    Introductions1[15].style.marginTop="9rem";
    Introductions1[15].style.height="180px";
     Text_about.textContent="This is a premium mod ! Increasing trades with villagers . you sale diamond and give many things from villagers different substance";
     Text_about.style.color="white";
     Text_about.style.marginTop="-60px";
     Text_about.style.marginTop="-5rem";
     close_intro.style.translate="30rem 8.5rem";
     close_intro.style.color="wheat";
     Introductions1[15].appendChild(close_intro);
     Introductions1[15].appendChild(Text_about);
     Informations1[15].style.marginTop="-6rem";
});
   close_intro.addEventListener('click',event=>{
    Introductions1.forEach(any=>{
        any.style.display="none";
    });
    Informations1.forEach(any=>{
        any.style.marginTop="13.7rem";
    })
});

        
    }
}
let bikini=document.getElementById("bikini");
const first=document.getElementById("first");
const last=document.getElementById("last");
let count=0;
first.addEventListener('click',event=>{
count++
if(count==1){
bikini.style.backgroundImage=("Photos\bikini botton2.jpg");
console.log('one');
}
});
const Signup=document.getElementById("sign");

Signup.addEventListener('click',event=>{
      form.style.display="block";
        header.classList.add("blured");
    header.style.transition="1s";
        body.classList.add("blured");
    body.style.transition="1s";
        footer.classList.add("blured");
    footer.style.transition="1s";
    form.style.transition="1s";  
    form.style.marginTop="-135rem";
    moon.style.filter="saturate(5%)";
    moon.style.transition="1s";
     feet.style.filter="saturate(5%)";
     feet.style.transition="1s";
     menu_icon.style.rotate="0deg";
     for_menu.style.marginLeft="-18rem";
     form.appendChild(close_btn);
        form.appendChild(h1);
        form.appendChild(h3);
        form.appendChild(label_name);
        form.appendChild(input_name);
        form.appendChild(Br1);
        form.appendChild(Br2);
        form.appendChild(label_lastname);
        form.appendChild(input_lastname);
        form.appendChild(Br3);
        form.appendChild(Br4);
        form.appendChild(label_age);
        form.appendChild(input_age);
        form.appendChild(Br5);
        form.appendChild(Br6);
        form.appendChild(label_email);
        form.appendChild(input_email);
        form.appendChild(Br7);
        form.appendChild(Br8);
        form.appendChild(label_password);
        form.appendChild(input_password);
        form.appendChild(Br9);
        form.appendChild(Br10);
        form.appendChild(Sumbit);
        form.appendChild(Br11);
        form.appendChild(Br12);
        form.appendChild(Clear);
         body.appendChild(form);
});
const search_btn=document.getElementById("search-btn");
const search=document.getElementById("search-input");
let on_off=0;
search_btn.addEventListener('click',event=>{
    on_off++;
    if(on_off==1){
    search.style.width="150px";
    }else if(on_off==2){
     search.style.width="35px";
    }else{
        on_off=0;
    }
});
const informations2=document.querySelectorAll(".informations2");
const Introductions2=document.querySelectorAll(".introduction2");;
for(let any=0;any<informations2.length;any++){
informations2[any].addEventListener('click',event=>{
     if(any==0){
        console.log(informations2);
    Introductions2[0].style.display="block";
    informations2[0].style.marginTop="-16rem";
    Introductions2[0].style.marginTop="10.8rem";
    Introductions2[0].style.height="100px";
     Text_about.textContent="In this mod you life in the big city and beatiful city with lots of restraunts but nobody life in this city";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[0].appendChild(close_intro);
     Introductions2[0].appendChild(Text_about);
    }else if(any==1){
    informations2[1].style.marginTop="-16rem";
    Introductions2[1].style.display="block";
    Introductions2[1].style.marginTop="10.8rem";
    Introductions2[1].style.height="100px";
     Text_about.textContent="Butcher in the game you can sale roust meat poultry in the game to villagers";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[1].appendChild(close_intro);
     Introductions2[1].appendChild(Text_about);
    }else if(any==2){
        informations2[2].style.marginTop="-16rem";
     Introductions2[2].style.display="block";
    Introductions2[2].style.marginTop="10.8rem";
    Introductions2[2].style.height="100px";
     Text_about.textContent="Shader in the game you can install it and see that's graphic";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[2].appendChild(close_intro);
     Introductions2[2].appendChild(Text_about);
    }else if(any==3){
        informations2[3].style.marginTop="-16rem";
     Introductions2[3].style.display="block";
    Introductions2[3].style.marginTop="10.8rem";
    Introductions2[3].style.height="100px";
     Text_about.textContent="one of the best mod is reality events in the game is this mod. Reality events in the game for example foggy and lighting , storm , duststorm , heatwave and etc..";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[3].appendChild(close_intro);
     Introductions2[3].appendChild(Text_about);
    }else if(any==4){
        informations2[4].style.marginTop="-16rem";
     Introductions2[4].style.display="block";
    Introductions2[4].style.marginTop="10.8rem";
    Introductions2[4].style.height="100px";
     Text_about.textContent="Bikini bottom is in the game it is a big city and also it's famous for children and most children usually known where is it.";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[4].appendChild(close_intro);
     Introductions2[4].appendChild(Text_about);
    }else if(any==5){
        informations2[5].style.marginTop="-16rem";
     Introductions2[5].style.display="block";
    Introductions2[5].style.marginTop="10.8rem";
    Introductions2[5].style.height="100px";
     Text_about.textContent="Different TNT in the game with different covers ald also with different powers";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[5].appendChild(close_intro);
     Introductions2[5].appendChild(Text_about);
    }else if(any==6){
        informations2[6].style.marginTop="-16rem";
     Introductions2[6].style.display="block";
    Introductions2[6].style.marginTop="10.8rem";
    Introductions2[6].style.height="100px";
     Text_about.textContent="Many transportations symbols . this mod also has a few cars in game . you can download better version of this mod in the premium Mods";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[6].appendChild(close_intro);
     Introductions2[6].appendChild(Text_about);
    }else if(any==7){
        informations2[7].style.marginTop="-16rem";
     Introductions2[7].style.display="block";
    Introductions2[7].style.marginTop="10.8rem";
    Introductions2[7].style.height="100px";
     Text_about.textContent="NEWB shader is can give you good experience in the game and you'll dream save";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[7].appendChild(close_intro);
     Introductions2[7].appendChild(Text_about);
    }else if(any==8){
        informations2[8].style.marginTop="-16rem";
     Introductions2[8].style.display="block";
    Introductions2[8].style.marginTop="10.8rem";
    Introductions2[8].style.height="100px";
     Text_about.textContent="Last mod or Bikini bottom . this is not city just three famous houses of spongebob squarpants and squarward and patrik";
     Text_about.style.color="black";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[8].appendChild(close_intro);
     Introductions2[8].appendChild(Text_about);
    }else if(any==9){
        informations2[9].style.marginTop="-16rem";
     Introductions2[9].style.display="block";
    Introductions2[9].style.marginTop="10.8rem";
    Introductions2[9].style.height="100px";
     Text_about.textContent="Many guns and different with different ability in the game also they has many and different ammo for anyone of them";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[9].appendChild(close_intro);
     Introductions2[9].appendChild(Text_about);
    }else if(any==10){
        informations2[10].style.marginTop="-16rem";
     Introductions2[10].style.display="block";
    Introductions2[10].style.marginTop="10.8rem";
    Introductions2[10].style.height="100px";
     Text_about.textContent="this mod is very good. 10 tress with fruits and different and you can take them on tree. remember they are fresh.";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[10].appendChild(close_intro);
     Introductions2[10].appendChild(Text_about);
    }else if(any==11){
        informations2[11].style.marginTop="-16rem";
     Introductions2[11].style.display="block";
    Introductions2[11].style.marginTop="10.8rem";
    Introductions2[11].style.height="100px";
     Text_about.textContent="In this mod you experience many and different places and hell";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[11].appendChild(close_intro);
     Introductions2[11].appendChild(Text_about);
    }else if(any==12){
        informations2[12].style.marginTop="-16rem";
     Introductions2[12].style.display="block";
    Introductions2[12].style.marginTop="10.8rem";
    Introductions2[12].style.height="100px";
     Text_about.textContent="Anomal to bedrock by shine . this is horror mod and we prefer children less than 10 years old doesn't play this";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[12].appendChild(close_intro);
     Introductions2[12].appendChild(Text_about);
    }else if(any==13){
        informations2[13].style.marginTop="-16rem";
     Introductions2[13].style.display="block";
    Introductions2[13].style.marginTop="10.8rem";
    Introductions2[13].style.height="100px";
     Text_about.textContent="more than 100 animals in the game for example: tiger , lion , parrot,girrafe,elephent,many birds and etc. with special behavour of them";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[13].appendChild(close_intro);
     Introductions2[13].appendChild(Text_about);
    }else if(any==14){
        informations2[14].style.marginTop="-16rem";
     Introductions2[14].style.display="block";
    Introductions2[14].style.marginTop="10.8rem";
    Introductions2[14].style.height="100px";
     Text_about.textContent="new armors with different abilities in the game and some of them are stronger than some of them";
     Text_about.style.color="white";
     Text_about.style.marginTop="-40px";
     close_intro.style.translate="8rem 4.5rem";
     close_intro.style.color="wheat";
     Introductions2[14].appendChild(close_intro);
     Introductions2[14].appendChild(Text_about);
    }
});
}
close_intro.addEventListener('click',event=>{
    Introductions2.forEach(any=>{
        any.style.display="none";
    });
    informations2.forEach(element=>{
        element.style.marginTop="0.50rem";
    })
});
//Menu equipments
const menu_icon=document.getElementById("menu_icon");
menu_icon.textContent='\u2630';
menu_icon.style.color="#00d4ff";

const for_menu=document.getElementById("for");
for_menu.style.color="#00d4ff";
const close_form=document.createElement("button");
const home_page=document.createElement("h2");
const Log_in=document.createElement('h2');
Log_in.textContent="Login";
Log_in.style.cursor="pointer";
Log_in.style.color="black";
Log_in.className="features";
home_page.textContent="Home Page";
home_page.className="features";
home_page.style.cursor="pointer";
home_page.style.color="black";
const Mincraft=document.createElement("h2");
Mincraft.textContent="Download Mincraft Lastest version";
Mincraft.className="features";
Mincraft.style.cursor="pointer";
Mincraft.style.color="black";
const Rate_Web=document.createElement("h2");
Rate_Web.textContent="Rate Website";
Rate_Web.className="features";
Rate_Web.style.color="Black";
const stars_home=document.createElement("div");
stars_home.style.display="flex";
stars_home.style.marginLeft="3.8rem";
stars_home.style.marginTop="-3.5rem";
const Stars1=document.createElement("h4");
Stars1.textContent="☆";
stars_home.appendChild(Stars1);
Stars1.className="Star";
const Stars2=document.createElement("h4");
Stars2.textContent="☆";
stars_home.appendChild(Stars2);
Stars2.className="Star";
const Stars3=document.createElement("h4");
Stars3.textContent="☆";
stars_home.appendChild(Stars3);
Stars3.className="Star";
const Stars4=document.createElement("h4");
Stars4.textContent="☆";
stars_home.appendChild(Stars4);
Stars4.className="Star";
const About_World_Wibe_Web=document.createElement("h2");
About_World_Wibe_Web.textContent="About this Web";
About_World_Wibe_Web.className="features";
About_World_Wibe_Web.style.color="Black";
let Percent=0;
let rates=false;
Stars1.addEventListener('click',event=>{
    if(Stars1.textContent==="☆"){
         rates=true;
        Percent=25;
        Stars1.textContent="⭐";
        console.log(Percent+"%");
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
    }else{
        if(Stars2.textContent==="⭐"){
          Stars1.textContent="⭐";
        }else{
          rates=false;
        Percent=0;
        Stars1.textContent="☆";
        console.log(Percent);
        localStorage.removeItem("Percent");
        }
    }
});
Stars2.addEventListener('click',event=>{
if(Stars1.textContent==="⭐"){
    if(Stars2.textContent==="☆"){
        rates=true;
        Percent=50;
        Stars2.textContent="⭐";
        console.log(Percent+"%");
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
    }else{
        if(Stars3.textContent==="⭐"){
           Stars2.textContent="⭐";
        }else{
        rates=false;
        Percent=25;
        Stars2.textContent="☆";
        console.log(Percent); 
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
        }
    }
}
});
Stars3.addEventListener('click',event=>{
if(Stars2.textContent==="⭐"){
    if(Stars3.textContent==="☆"){
       rates=true;
       Percent=75;
       Stars3.textContent="⭐";
       console.log(Percent+"%");
       localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
    }else{
        if(Stars4.textContent==="⭐"){
           Stars3.textContent="⭐";
        }else{
        rates=false;
        Percent=50;
        Stars3.textContent="☆";
        console.log(Percent); 
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
        }
    }
}
});
Stars4.addEventListener('click',event=>{
if(Stars3.textContent==="⭐"){
    if(Stars4.textContent==="☆"){
       rates=true;
       Percent=100;
       Stars4.textContent="⭐";
       console.log(Percent+"%");
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
    }else{
        rates=false;
        Percent=75;
        Stars4.textContent="☆";
        console.log(Percent); 
        localStorage.setItem("Percent",Percent);
        localStorage.getItem("Percent");
        }
}
});
if(localStorage.getItem("Percent")==25){
Stars1.textContent="⭐";
}else if(localStorage.getItem("Percent")==50){
Stars1.textContent="⭐";
Stars2.textContent="⭐";
}else if(localStorage.getItem("Percent")==75){
Stars1.textContent="⭐";
Stars2.textContent="⭐";
Stars3.textContent="⭐";
}else if(localStorage.getItem("Percent")==100){
Stars1.textContent="⭐";
Stars2.textContent="⭐";
Stars3.textContent="⭐";
Stars4.textContent="⭐";
}else{
Stars1.textContent="☆";
Stars2.textContent="☆";
Stars3.textContent="☆";
Stars4.textContent="☆";
}
close_form.textContent="✖";
close_form.id="close-form";
Log_in.addEventListener('click',event=>{
    window.location.href="Log_in.html";
})
menu_icon.addEventListener('click',event=>{
    menu_icon.style.rotate="-90deg";
    for_menu.style.marginLeft="-20px";
    for_menu.appendChild(close_form);
    for_menu.appendChild(home_page);
    for_menu.appendChild(Mincraft);
    for_menu.appendChild(Rate_Web);
    for_menu.appendChild(stars_home);
    for_menu.appendChild(Log_in);
    for_menu.appendChild(About_World_Wibe_Web);
});
close_form.addEventListener('click',event=>{
    menu_icon.style.rotate='0deg';
    for_menu.style.marginLeft="-18rem";
});
home_page.addEventListener('click',do_it=>{
    menu_icon.style.rotate='0deg';
    for_menu.style.marginLeft="-18rem";
});
Mincraft.addEventListener('click',event=>{
    let Change_Page=window.confirm("Are you sure ? Reason for download Mincraft we need change page ?");
    if(Change_Page==true){
    window.location.href="Download_Mincraft.html";
    }else{}//Nothing
    
});
About_World_Wibe_Web.style.cursor="pointer";
About_World_Wibe_Web.addEventListener('click',Wedding=>{
window.location.href="About_Website.html";
});

const All_Mods=document.getElementById("all");
const Shader_Mods=document.getElementById("shader");
const Skin_Mods=document.getElementById("skin");
const Map_Mods=document.getElementById("map");
const Short_Videos=document.getElementById("short");
const SkyBlock_Mods=document.getElementById("sky");
const Horror_Mods=document.getElementById("horror");
const Furniture_Mods=document.getElementById("furniture");
const Mods=document.querySelectorAll(".mods");
const Coloumn_st=document.getElementById("coloum-st");
const Coloumn_nd=document.getElementsByClassName("coloum-nd");
const Coloumn_rd=document.getElementsByClassName("coloum-rd");
const Especial=document.querySelectorAll(".especial");
const Div_for_Especials=document.createElement("div");
const Box_Colouring=document.getElementById("a2");
const Button_up=document.getElementById("Button-up");
const myHh2=document.getElementById("h2");
const Last_Mods_1clm=document.getElementById("last-mods");
const Last_Mods_Two=document.getElementById("last-two-mods");
const Last_Mods_Three=document.getElementById("last-three-mods");
const Last_Mods_Four=document.getElementById("last-four-mods");
const Last_Mods_Five=document.getElementById("last-five-mods");
const Last_Mods_Six=document.getElementById("last-six-mods");
const Part2_of_mods=document.querySelectorAll('.part2');
const Part3_of_mods=document.querySelectorAll('.part3');
const Part4_of_mods=document.querySelectorAll('.part4');
const Part5_of_mods=document.querySelectorAll('.part5');
const Part6_of_mods=document.querySelectorAll('.part6');
const Part7_of_mods=document.querySelectorAll('.part7');




SkyBlock_Mods.addEventListener('click',event=>{
  window.location.href='not.html';  
});



Horror_Mods.addEventListener('click',event=>{
Coloumn_st.removeChild(Mods[0]);
Coloumn_st.removeChild(Mods[1]);
Coloumn_st.removeChild(Mods[2]);
Coloumn_st.removeChild(Mods[3]);
Coloumn_st.removeChild(Mods[4]);
Coloumn_st.appendChild(Part2_of_mods[3]);
Coloumn_st.appendChild(Part4_of_mods[2]);
Coloumn_st.style.marginLeft="30rem";
Coloumn_nd[0].removeChild(Especial[0]);
Coloumn_nd[0].removeChild(Especial[1]);
Coloumn_nd[0].appendChild(Especial[2]);
Coloumn_nd[0].appendChild(Especial[3]);
Coloumn_nd[1].removeChild(Especial[5]);
Coloumn_nd[1].appendChild(Especial[6]);
Coloumn_rd[1].removeChild(Especial[7]);
Coloumn_rd[1].appendChild(Especial[12]);
Coloumn_rd[1].appendChild(Especial[14]);
Coloumn_nd[2].style.display="none";
Coloumn_nd[3].style.display='none';
Coloumn_rd[2].style.display='none';
Coloumn_rd[3].style.display='none';
Part2_of_mods[0].style.display='none';
Part2_of_mods[1].style.display='none';
Part2_of_mods[2].style.display='none';
Part2_of_mods[4].style.display='none';
Part3_of_mods.forEach(any=>{
    any.style.display='none';
});
Part4_of_mods.forEach(any=>{
  Part4_of_mods[2].style.display="block";
  any.style.display="none";
});
Part5_of_mods.forEach(every=>{
    every.style.display="none";
});
Part6_of_mods.forEach(every=>{
    every.style.display="none";
});
Part7_of_mods.forEach(every=>{
    every.style.display="none";
});
})
console.log(Part2_of_mods)
Short_Videos.addEventListener('click',event=>{
window.location.href='Minista.html';
});




Map_Mods.addEventListener('click',event=>{
Coloumn_st.removeChild(Mods[0]);
Coloumn_st.removeChild(Mods[1]);
Coloumn_st.removeChild(Mods[2]);
Coloumn_st.removeChild(Mods[3]);
Coloumn_st.removeChild(Mods[4]);
Coloumn_st.appendChild(Part2_of_mods[0]);
Coloumn_st.appendChild(Part2_of_mods[4]);
Coloumn_st.appendChild(Part3_of_mods[3]);
Coloumn_st.appendChild(Part4_of_mods[1]);
Coloumn_st.appendChild(Part4_of_mods[2]);
Coloumn_nd[0].removeChild(Especial[0]);
Coloumn_nd[0].removeChild(Especial[1]);
Coloumn_nd[0].appendChild(Especial[2]);
Coloumn_nd[0].appendChild(Especial[3]);
Coloumn_nd[1].removeChild(Especial[4]);
Coloumn_nd[1].removeChild(Especial[5]);
Coloumn_nd[1].appendChild(Especial[6]);
Coloumn_nd[1].appendChild(Especial[9]);
Coloumn_rd[1].appendChild(Especial[14]);
Coloumn_nd[2].style.display="none";
Coloumn_nd[3].style.display="none";
Coloumn_rd[2].style.display="none";
Coloumn_rd[3].style.display="none";
Coloumn_rd[1].removeChild(Especial[7]);
Especial[14].style.marginLeft="0rem";

Last_Mods_1clm.style.display='none';
Last_Mods_Two.style.display="none";
Last_Mods_Three.style.display="none";
Last_Mods_Four.style.display="none";
Last_Mods_Five.style.display="none";
Last_Mods_Six.style.display="none";
Signup.style.display='none';
});
Skin_Mods.addEventListener('click',event=>{
Coloumn_st.style.display="none";
Coloumn_nd[0].style.display="none";
Coloumn_nd[1].style.display="none";
Coloumn_nd[2].style.display="none";
Coloumn_nd[3].style.display="none";
Coloumn_rd[0].style.display="none";
Coloumn_rd[1].style.display="none";
Coloumn_rd[2].style.display="none";
Coloumn_rd[3].style.display="none";
Div_for_Especials.style.display="none";
myHh2.style.display="none";
Last_Mods_1clm.style.display="none";
Last_Mods_Two.style.display="none";
Last_Mods_Three.style.display="none";
Last_Mods_Four.style.marginTop="-18rem";
Part5_of_mods.forEach(any=>{
    any.style.display="block";
});
Part6_of_mods.forEach(any=>{
    any.style.display="block";
});
Part7_of_mods.forEach(any=>{
    any.style.display="block";
});
if(Skin_Mods.addEventListener('click',event=>{

})){}
if(Shader_Mods.addEventListener('click',event=>{})){
Coloumn_st.style.display="flex";
Div_for_Especials.style.display="flex";
Div_for_Especials.style.translate="0rem 150rem";
main.appendChild(Div_for_Especials);
Mods.forEach(any=>{
    any.style.display="none";
});
let Shaders=[Mods[7],Mods[12],Mods[13],Mods[17]];
Shaders.forEach(any=>{
    any.style.display="block";
    Coloumn_st.appendChild(any);
});
Coloumn_st.style.marginRight="8rem";
Especial.forEach(any=>{
    any.style.display="none";
});
let Especials=[Especial[5],Especial[11],Especial[12]];
Especials.forEach(any=>{
    any.style.display="block";
});
Div_for_Especials.style.marginTop="-95rem";
Div_for_Especials.appendChild(Especial[5]);
Div_for_Especials.appendChild(Especial[11]);
Div_for_Especials.appendChild(Especial[12]);
Signup.style.display="none";
Button_up.style.marginTop="25rem";
myHh2.style.marginTop="-5.2rem";
Last_Mods_1clm.style.display="none";
Last_Mods_Two.style.display="none";
Last_Mods_Three.style.display="none";
}

});
Shader_Mods.addEventListener('click',event=>{
Coloumn_st.style.display="flex";
Div_for_Especials.style.display="flex";
main.appendChild(Div_for_Especials);
Div_for_Especials.style.translate="0rem -180rem";
Mods.forEach(any=>{
    any.style.display="none";
});
let Shaders=[Mods[7],Mods[12],Mods[13],Mods[17]];
Shaders.forEach(any=>{
    any.style.display="block";
    Coloumn_st.appendChild(any);
});
Coloumn_st.style.marginRight="8rem";
Especial.forEach(any=>{
    any.style.display="none";
});
let Especials=[Especial[5],Especial[11],Especial[12]];
Especials.forEach(any=>{
    any.style.display="block";
});
Div_for_Especials.style.marginTop="-95rem";
Div_for_Especials.appendChild(Especial[5]);
Div_for_Especials.appendChild(Especial[11]);
Div_for_Especials.appendChild(Especial[12]);
Signup.style.display="none";
Button_up.style.marginTop="25rem";
myHh2.style.marginTop="-5.2rem";
Last_Mods_1clm.style.display="none";
Last_Mods_Two.style.display="none";
Last_Mods_Three.style.display="none";
});
All_Mods.addEventListener('click',event=>{
Coloumn_nd[0].appendChild(Especial[0]);
Coloumn_nd[0].appendChild(Especial[1]);
Coloumn_nd[0].style.marginLeft="36rem";

Coloumn_rd[0].appendChild(Especial[2]);
Coloumn_rd[0].appendChild(Especial[3]);
Coloumn_rd[0].style.marginLeft="31rem";

Coloumn_nd[1].appendChild(Especial[4]);
Coloumn_nd[1].appendChild(Especial[5]);
Coloumn_nd[1].style.marginLeft="27rem";

Coloumn_rd[1].appendChild(Especial[6]);
Coloumn_rd[1].appendChild(Especial[7]);
Coloumn_rd[1].style.marginLeft="22rem";

Coloumn_nd[2].appendChild(Especial[8]);
Coloumn_nd[2].appendChild(Especial[9]);
Coloumn_nd[2].style.marginLeft="16rem";

Coloumn_rd[2].appendChild(Especial[10]);
Coloumn_rd[2].appendChild(Especial[11]);
Coloumn_rd[2].style.marginLeft="22rem";

Coloumn_nd[3].appendChild(Especial[12]);
Coloumn_nd[3].appendChild(Especial[13]);
Coloumn_nd[3].style.marginLeft="27rem";

Coloumn_rd[3].appendChild(Especial[14]);
Coloumn_rd[3].appendChild(Especial[15]);
Coloumn_rd[3].style.marginLeft="0rem";

Last_Mods_1clm.style.marginLeft="20rem";

    window.alert("Something in the page is changing if Can you find it ?😉");
    Coloumn_st.style.display="flex";
    Coloumn_st.style.marginLeft="23rem";
Coloumn_nd[0].style.display="flex";
Coloumn_nd[1].style.display="flex";
Coloumn_nd[2].style.display="flex";
Coloumn_nd[3].style.display="flex";
Coloumn_rd[0].style.display="flex";
Coloumn_rd[1].style.display="flex";
Coloumn_rd[2].style.display="flex";
Coloumn_rd[3].style.display="flex";
myHh2.style.display="block";
Last_Mods_1clm.style.display="flex";
Last_Mods_Two.style.display="flex";
Last_Mods_Three.style.display="flex";
Part2_of_mods.forEach(any=>{
    any.style.display="flex";
});
    Signup.style.display="block";
    let any_coloumn1=[Mods[7],Mods[12],Mods[13],Mods[17]];
    any_coloumn1.forEach(any=>{
        any.style.display='none';
    });
    let Mods_in_coloumnLoad=[Mods[0],Mods[1],Mods[2],Mods[3],Mods[4]];
     Mods_in_coloumnLoad.forEach(any=>{
        any.style.display="block";
        Coloumn_st.appendChild(any);
     });
     Coloumn_st.style.marginRight="11.5rem";
     Div_for_Especials.remove();
     let Especials=[Especial[5],Especial[11],Especial[12]];
     Coloumn_nd[1].appendChild(Especial[5]);
     Coloumn_rd[2].appendChild(Especial[11]);
     Coloumn_nd[3].appendChild(Especial[12]);

     Especial.forEach(any=>{
        any.style.display="block";
     });
     Last_Mods_1clm.style.display="flex";
     Last_Mods_1clm.style.marginLeft="5rem";
     Part2_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_1clm.appendChild(any);
     });
     Last_Mods_Two.style.display="flex";
     Part3_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_Two.appendChild(any);
     });
       Last_Mods_Three.style.display="flex";
       Last_Mods_Three.style.marginLeft="5rem";
     Part4_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_Three.appendChild(any);
     });
      Last_Mods_Four.style.display="flex";
       Last_Mods_Four.style.marginLeft="5rem";
     Part5_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_Four.appendChild(any);
     });
      Last_Mods_Five.style.display="flex";
       Last_Mods_Five.style.marginLeft="-1rem";
     Part6_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_Five.appendChild(any);
     });
     Last_Mods_Six.style.display="flex";
       Last_Mods_Six.style.marginLeft="31rem";
     Part7_of_mods.forEach(any=>{
        any.style.display="block";
        Last_Mods_Six.appendChild(any);
     });
     Button_up.style.marginTop="-5rem";
     Coloumn_rd[3].style.marginLeft="30rem";
});
