function login () {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === "admin" && password === "admin") {
    alert("Log in succesful");
    window.location.assign("index.html")
  }else {
    alert("Invalid username or password.Please try again.")
  }
}