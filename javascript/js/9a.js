document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert(`Вы зарегистрированы!`);
    window.location.href = "login.html";
  });
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