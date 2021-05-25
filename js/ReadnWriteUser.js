
const EditName = document.querySelector('#Ename');
const homebtn = document.querySelector('#home');
const Editbal = document.querySelector('#Ebal');
const Editpass = document.querySelector('#Epass');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let open = false;let openbal = false;let openpass = false;
var httpUser;
var index = 0;
var boolprev;var boolnext;
var UserINFO = []; //name password, and balance goes here from file
if (window.XMLHttpRequest) { 
httpUser = new XMLHttpRequest();
} else { // code for IE6, IE5
httpUser = new ActiveXObject("Microsoft.XMLHTTP");
}
httpUser.onreadystatechange = function() {
if (httpUser.readyState == 4 && httpUser.status == 200) {
var text = httpUser.responseText;
// Now convert it into array using regex
UserINFO = text.replace(/\r?\n|\r/g, ",").split(",");
Writer(index);
}
}
httpUser.open("GET", "Data\\UsersINFO.txt", true);
httpUser.send();
EditName.addEventListener('click',()=>{
    open = !open;
    if(open) {
        EditName.innerHTML = "OK"
    document.querySelector('#nnn').disabled = false;
    document.querySelector('#nnn').focus();
    document.querySelector('#bal').disabled = false;
    document.querySelector('#pass').disabled = false;
    if(next.disabled == false){next.disabled = true; boolnext = true;console.log('t r')};
    if(prev.disabled == false){prev.disabled = true; boolprev = true;console.log('pred r')}
    
    
    }
    else {UserINFO[index] =document.querySelector('#nnn').value;UserINFO[index+2] = document.querySelector('#bal').value ;UserINFO[index+1]= document.querySelector('#pass').value;document.querySelector('#pass').disabled = true;document.querySelector('#bal').disabled = true;document.querySelector('#nnn').disabled = true;EditName.innerHTML = "Edit"; if(boolnext == true){next.disabled = false;console.log('next r')};if(boolprev== true){prev.disabled = false;console.log('ptrv r')};boolnext = false; boolprev = false;} //check duplication here.
})
function Writer(i) {
    document.querySelector('#nnn').value = UserINFO[i];
    document.querySelector('#bal').value = UserINFO[i+2];
    document.querySelector('#pass').value = UserINFO[i+1];
}
function checklimits() {
    if(index+3 >= UserINFO.length) {next.disabled = true};
}

next.addEventListener('click',() => {
    index = index + 3;
    checklimits();
    if(index!=0){checklimits(); Writer(index); console.log('not 0')}
    Writer(index);
    prev.disabled = false;
})

prev.addEventListener('click',() => {
    index = index -3;
    checklimits();
    if(index == 0){Writer(index);prev.disabled = true; console.log('not 0')}
    Writer(index);
    next.disabled = false;
})