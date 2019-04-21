//logout
const logOut = document.querySelector('#lnk-logout');
logOut.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(()=>{
        window.open('index.html', '_self');
    })
})
