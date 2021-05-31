//input //check if withdraw or deposit
//check if it's a number // spaces in the number //check is empty
//document.querySelector('#');
const btnW = document.querySelector('#with');var OkW=false;
const btnD = document.querySelector('#dep');var OkD=true;
const input = document.querySelector('#input');var okfinal = false;
const ErrorM = document.querySelector('#small');var index;
const btnOk = document.querySelector('#ok');
const user = JSON.parse(localStorage.getItem('logU'));
const U = JSON.parse(localStorage.getItem('user'));
console.log(user.name);
console.log(U[0].name);
btnD.addEventListener('click', ()=>{
    OkW = false;btnD.disabled = true;
    OkD = true;btnW.disabled = false;
})
btnW.addEventListener('click', ()=>{
    OkW = true;btnD.disabled = false;
    OkD = false;btnW.disabled = true;
})
btnOk.addEventListener('click', ()=>{
    Check();
    if(okfinal) {
        console.log(okfinal)
        console.log(input.value);
        if(OkW){console.log("W");user.balance-=input.value;console.log(user.balance);localStorage.setItem('logU',JSON.stringify(user));for(var i=0;i<U.length;i++){if( user.name == U[i].name ){console.log("replaced");index =i;}};U[index]=user;localStorage.setItem('user',JSON.stringify(U))}
        if(OkD){console.log("D");user.balance=user.balance+parseInt(input.value);console.log(user.balance);localStorage.setItem('logU',JSON.stringify(user));for(var i=0;i<U.length;i++){if( user.name == U[i].name ){console.log("replaced");index =i;}};U[index]=user;localStorage.setItem('user',JSON.stringify(U))}
    }
})
function Check() {
    var ok1=true;var ok2=true;var ok3=true;var ok4=true;
if(parseInt(input.value)>5000){ok1=false;ErrorM.innerHTML = "5000$ is the limit";ErrorM.classList.remove('opacity-0');ErrorM.classList.add('opacity-100')}
if(typeof parseInt(input.value) != 'number'){ok2=false}
if(parseInt(input.value)<0){ok3 = false;ErrorM.innerHTML = "Please enter a Postive Number";ErrorM.classList.remove('opacity-0');ErrorM.classList.add('opacity-100')}
if(input.value == ""){ok4=false;ErrorM.innerHTML = "Please enter a Number";ErrorM.classList.remove('opacity-0');ErrorM.classList.add('opacity-100')}
if(ok1&&ok2&&ok3&&ok4){okfinal=true;ErrorM.classList.add('opacity-0');ErrorM.classList.remove('opacity-100')}
}