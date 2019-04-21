//login
const logIn = document.querySelector('#btn-logIn');
logIn.addEventListener("click", (e) => {
    e.preventDefault();
    //get user data
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    showLoader();
    auth.signInWithEmailAndPassword(email,pwd).then(()=>{
        console.log('USER LOGGED!');
        document.getElementById("email").value = "";
        document.getElementById("pwd").value = "";
        window.open('home.html', '_self');
    })
})
//loading animation
function showLoader() {
  document.getElementById("loadModal").style.display = "block";
  document.getElementById("startModal").style.display = "none";
}
