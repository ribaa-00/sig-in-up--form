
function signupValidation() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    document.getElementById("username").style.border = ""
    document.getElementById("usernameerror").innerHTML = ""

    document.getElementById("email").style.border = ""
    document.getElementById("emailerror").innerHTML = ""

    document.getElementById("password").style.border = ""
    document.getElementById("passworderror").innerHTML = ""

    let isvalid = true;

    if (username == "") {
        document.getElementById("username").style.border = "0.5px solid red"
        document.getElementById("usernameerror").innerHTML = "This field is required"
        isvalid = false
    }

    if (email == "") {
        document.getElementById("email").style.border = "0.5px solid red"
        document.getElementById("emailerror").innerHTML = "This field is required"
        isvalid = false
    }

    if (password == "") {
        document.getElementById("password").style.border = "0.5px solid red"
        document.getElementById("passworderror").innerHTML = "This field is required"
        isvalid = false
    }

    if (isvalid) {
        alert("signup successfully")

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""

        window.location.href = "signin.html"
    }

}


// ===============================================================================================================



// function signinValidation() {

//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value


//     document.getElementById("email").style.border = ""
//     document.getElementById("emailerror").innerHTML = ""

//     document.getElementById("password").style.border = ""
//     document.getElementById("passworderror").innerHTML = ""

//     let isvalid = true;


//     if (email == "") {
//         document.getElementById("email").style.border = "0.5px solid red"
//         document.getElementById("emailerror").innerHTML = "This field is required"
//         isvalid = false
//     }

//     if (password == "") {
//         document.getElementById("password").style.border = "0.5px solid red"
//         document.getElementById("passworderror").innerHTML = "This field is required"
//         isvalid = false
//     }

//     if (isvalid) {
//         alert("signin successfully")

//         document.getElementById("email").value = ""
//         document.getElementById("password").value = ""

        window.location.href = "welcome.html"
//     }

// }


// ===============================================================================================================

