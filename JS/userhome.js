const test = document.querySelector('#user');
const bal = document.querySelector('#bal');
const username = JSON.parse(localStorage.getItem('logU'));
test.innerHTML = '-welcome' +" " + username.name;
bal.innerHTML = '-Balance:' +" "+ username.balance +" $"

