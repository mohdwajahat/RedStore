// Hamburger menu

var MenuItems = document.getElementById("MenuItems")
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if (MenuItems.style.maxHeight == "0px") 
    {
        MenuItems.style.maxHeight = "200px";
    }
    else 
    {
        MenuItems.style.maxHeight = "0px";
    }
}


// Toggle form 
var login = document.getElementById("login")
var register = document.getElementById("register")
var loginform = document.getElementById("loginform")
var regform = document.getElementById("regform")
var indicator = document.getElementById("indicator")

login.addEventListener("click",() => {
    regform.style.transform = "translateX(300px)"
    loginform.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(0px)"
})

register.addEventListener("click",() => {
    regform.style.transform = "translateX(0px)"
    loginform.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
})

