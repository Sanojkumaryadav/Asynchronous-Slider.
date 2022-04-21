
   document.querySelector('form').addEventListener('submit', loginFn);

        var registeredUsers = JSON.parse(localStorage.getItem('UsersData'));
        function loginFn(){
            event.preventDefault();
            var enteredEmail = document.querySelector('#email').value;
            var enteredPassword = document.querySelector('#password').value;

            registeredUsers.forEach(userData => {
                console.log(userData.email)
           console.log(enteredEmail)
           console.log(userData.password)
           console.log(enteredPassword)
                if(userData.email === enteredEmail && userData.password === enteredPassword){
                    alert("login successful");
                    window.location.href = "index.html"; 
                } else {
                    alert("invalid Credentials")
                }
            });
        }