      //  const fs = require('fs');
        const raAdmin = document.querySelector('#ADMIN');
        const raUser = document.querySelector('#USER');
        const Uname = document.querySelector('#name3');
        const Password = document.querySelector('#pass');
        const Login = document.querySelector('#btn');
        const ErrorN = document.querySelector('#UEr');
        const ErrorP = document.querySelector('#AEr');
        const LU = document.querySelector('#L');
        const LP = document.querySelector('#LP');
        var OKcheck;var OKadmin;var OKuser
        var usernameArr = ['saad','moh','ahmad','admin']; //just to test function replacing this with a file system with real data.
        var passwordArr = ['saad','moh','ahmad','admin'];
        //button eventListner
        Login.addEventListener('click',() => {
            Check();
        })
        function Check() { //This checks basic password and username requirements
            console.log('hi');
            if(Uname.value == ""){ErrorN.innerHTML = 'username is empty';ErrorN.classList.remove('opacity-0');ErrorN.classList.add('opacity-1');OKcheck = false;} else {ErrorN.classList.remove('opacity-1');ErrorN.classList.add('opacity-0') ;}
            if(Password.value == ""){ErrorP.innerHTML = 'Password is empty';ErrorP.classList.remove('opacity-0');ErrorP.classList.add('opacity-1')} else {ErrorP.classList.remove('opacity-1');ErrorP.classList.add('opacity-0') ;}
            if(Uname.value.split(" ").length > 1) {ErrorN.innerHTML = 'username must be One Word';ErrorN.classList.remove('opacity-0');ErrorN.classList.add('opacity-1') ;OKcheck = false;}
            if(Uname.value != "" && Password.value != "" && Uname.value.split(" ").length == 1) {OKcheck = true};
            if(OKcheck) {
                console.log("tamam");
                RadioCheck();
                Checkfile(Uname.value,Password.value);
            }
        }
        function Checkfile(username,password) { //readfile goes here.
            for(var i=0;i<usernameArr.length;i++) {if(username == usernameArr[i] && password == passwordArr[i]){console.log("welcome");var okok = true}}
            if(okok){
            ErrorN.classList.remove('opacity-1');ErrorN.classList.add('opacity-0');
            if(OKadmin)
            window.location.href = 'AdminHome.html';
            else {
                window.location.href = 'www.google.com'
            }
            }
            else{ErrorN.innerHTML = 'username or password is incorrect';ErrorN.classList.remove('opacity-0');ErrorN.classList.add('opacity-1');console.log("Wrong")}
        }
        function RadioCheck() {
            if(raAdmin.checked) {OKadmin = true;}
            else if(raUser.checked) {OKuser = true}
        }
        //Radio buttons check
        //username checking(isEmpty?,isMeetRequirements?)
        //password checking(isEmpty?,isMeetRequirements?)
        //FileRead for checking Login.