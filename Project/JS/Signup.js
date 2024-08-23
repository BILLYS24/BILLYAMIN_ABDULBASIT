const forms = document.querySelector(".forms");``
const pwShowHide = document.querySelectorAll(".fa-eye-slash");
const links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type ="text";
                eyeIcon.classList.replace("fa-eye-slash" ,"fa-eye");
                return;
            }
            password.type ="password";
                eyeIcon.classList.replace("fa-eye" ,"fa-eye-slash");
        })
    })
})

links.forEach(link =>{
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup")
    })
})


// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;
// const password2=document.getElementById("password2").value;

// forms.addEventListener("submit" , (e) => {
//     e.preventDefault();
// })


// let errorMessage = "";


// var emailExp = /^[a-zA-Z0-9.!@#$%&*]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// if(email=== " "|| !emailExp.test(email)){
//     errorMessage+="Please enter a valid email";
// }

// var passExp = /^[a-zA-Z>!@#$%^&*]{10,}/
// if(password===" " || !passExp.test(password)){
//     errorMessage+="Please Input A Password";
// }

// if(password2!==password){
//     errorMessage+="Make sure your password match !!"
// }


// if(errorMessage){
//     document.querySelector(".errortext").innerHTML=" "
//     alert("You have succesfully logged in ")

//     forms.submit()

// }

