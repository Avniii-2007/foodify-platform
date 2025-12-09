document.getElementById("submit").addEventListener("click" , a)
function a(){
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    let res = ""
    if(email.includes('@')&& email.includes('.com')){

    }
    else{
        res += "Email isn't valid\n"
    }
    if(pass.length < 8){
        res += "Password length cant be less than 8\n"
    }
    if(pass.includes('@') || pass.includes('%') || pass.includes('#') || pass.includes('$')){

    }
    else{
        res += "Pass should include atleast one special character\n"
    }
    if(res == ""){
        const btn = document.getElementById("submit")
        btn.type = "submit"
    }
    else{
        alert(res)
    }
    
}