//singUP
const SingUP = document.querySelector('#singUP-btn');
SingUP.addEventListener("click", (e) => {
    e.preventDefault();
    //pegando dados de entrada
    const email = document.querySelector('#new_email');
    const pwd = document.querySelector('#new_pwd');
    //SIGNUP to service
    auth.createUserWithEmailAndPassword(email.value,pwd.value).then(cred => {
        console.log(cred);
        clearValue("new_email");
        clearValue("new_pwd");
    })

})
//logout
const logOut = document.querySelector('#lnk-logout');
logOut.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('USER OUT!');
        logOut.style.display = "none";
    })
})
//login
const logIn = document.querySelector('#btn-logIn');
logIn.addEventListener("click", (e) => {
    e.preventDefault();
    //get user data
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    auth.signInWithEmailAndPassword(email,pwd).then(()=>{
        console.log('USER LOGGED!');
        document.getElementById("lnk-logout").style.display = "initial";
        document.getElementById("email").value = "";
        document.getElementById("pwd").value = "";
        window.open('home.html', '_self');
    })
})

function clearValue(id) {
    document.getElementById(id).value = "";
}
