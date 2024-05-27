document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (localStorage.getItem('username') == username && localStorage.getItem('password') == password){
        window.location.href = "hello.html";
    }else{
        alert(`Неправильные данные`)
    }
  });