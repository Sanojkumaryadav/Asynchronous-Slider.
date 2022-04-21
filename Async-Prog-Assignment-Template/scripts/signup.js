
document.querySelector('form').addEventListener('submit',SignUpFn);

var UsersData = JSON.parse(localStorage.getItem('UsersData')) || [];

function SignUpFn(){
    event.preventDefault();
    let userObj = {
        name : document.querySelector('#name').value,
        number : document.querySelector('#number').value,
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value,
    }
    UsersData.push(userObj);
    localStorage.setItem('UsersData', JSON.stringify(UsersData));
    alert('SignUp Successfully');
}