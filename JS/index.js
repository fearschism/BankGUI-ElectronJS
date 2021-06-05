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
        var passwordArr = ['saad','moh','ahmad','admin'];let indy;
        const number1=null;
        if(UserLogin!=null) {
            number1=Math.floor(Math.random()*9999+1);
        var UserLogin = JSON.parse(localStorage.getItem('user'));
        for(var i=0;i<UserLogin.length;i++) {if(number1==UserLogin[i].number)number1=Math.floor(Math.random()*9999+1)};//id generator}
        }
        //Storage--System. READ-ONLY, default users and admins you can delete them using dashboard not here
         let admin = {
             name:'saad',
             password:'saad'
         }
         let admin2 ={
             name: 'admin',
         password:'admin'
         }
         let user = {
            name:"user",
            balance:1000,
            password:"user",
            number:number1,
            loan:0,
            E_account:{
                E_balance:0,
                coins:{
                    number_owned_All:0,
                    saadCoin:{
                        number_owned:0,
                        shares:0
                    },
                    piCoin:{
                        number_owned:0,
                        shares:0
                    },
                    byteCoin:{
                        number_owned:0,
                        shares:0
                    },
                    tobiCoin:{
                        number_owned:0,
                        shares:0
                    },
                    hashBrown:{
                        number_owned:0,
                        shares:0
                    }
                },
                stocks:{
                    number_owned_All:0,
                    GMR:{
                        number_owned:0,
                        shares:0
                    },
                    muve:{
                        number_owned:0,
                        shares:0
                    },
                    blkBucks:{
                        number_owned:0,
                        shares:0
                    },
                    zaitco:{
                        number_owned:0,
                        shares:0
                    },
                    gst:{
                        number_owned:0,
                        shares:0
                    },
                }
            }
        }
            let arr = [admin,admin2];
            let arr2 = [user];
            if(localStorage.getItem('user') == null) {localStorage.setItem('user',JSON.stringify(arr2));}//for emergencey
            if(localStorage.getItem('admin') == null) {localStorage.setItem('admin',JSON.stringify(arr));}//for emergencey
            if(localStorage.getItem('admin') == null || localStorage.getItem('user') == null) { //used for first time installation.
                localStorage.setItem('admin',JSON.stringify(arr));
                localStorage.setItem('user',JSON.stringify(arr2));  
            }
            if(JSON.parse(localStorage.getItem('admin')).length==0) {localStorage.removeItem('admin');localStorage.removeItem('user')}
            if(JSON.parse(localStorage.getItem('user')).length==0) {localStorage.removeItem('user');localStorage.removeItem('admin')}
        //--------------------------------
        var AdminsLogin = JSON.parse(localStorage.getItem('admin'));
        UserLogin = JSON.parse(localStorage.getItem('user'));
    //-------------------



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
            console.log(password);
            for(var i=0;i<AdminsLogin.length;i++) {if(username == AdminsLogin[i].name && password == AdminsLogin[i].password){console.log("welcome Admin");indy = i;var okokA = true}}
            for(var i=0;i<UserLogin.length;i++) {if(username == UserLogin[i].name && password == UserLogin[i].password){console.log("welcome User");indy = i;var okokU = true}}
            if(username =='erase' &&password=='1'){localStorage.removeItem('user');console.log('ok');window.location.href="index.html"}
            if(okokA){
            ErrorN.classList.remove('opacity-1');ErrorN.classList.add('opacity-0');
            }
            if(OKadmin && okokA) {
            var loggedinA = { //session
                name:AdminsLogin[indy].name,
                password:AdminsLogin[indy].password
            }
            localStorage.setItem('logA', JSON.stringify(loggedinA));
            window.location.href = 'AdminHome.html';
            }
            else if(OKuser && okokU) {
                var loggedinU = {
                    name:UserLogin[indy].name,
                    balance:UserLogin[indy].balance,
                    password:UserLogin[indy].password,
                    number:UserLogin[indy].number,
                    loan:UserLogin[indy].loan,
                    E_account:UserLogin[indy].E_account
                }
                localStorage.setItem('logU', JSON.stringify(loggedinU));
                window.location.href = 'UserHome.html'
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