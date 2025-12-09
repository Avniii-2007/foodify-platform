document.getElementById("sign").addEventListener("click", s)
function s () {
    const mail= document.getElementById("mail").value
    const word= document.getElementById("word").value
    let abc= "";
    if(mail.includes('@')&& mail.includes('.com')){

    }
    else{
        abc += "Email isn't valid\n";
    }
    if(word.length < 8){
        abc += "Password length cant be less than 8\n";
    }
    if(word.includes('@') || word.includes('%') || word.includes('#') || word.includes('$')){

    }
    else{
        abc += "Password should include atleast one special character\n";
    }
    if(abc == ""){
        const btn = document.getElementById("sign")
        btn.type = "sign"
    }
    else{
        alert(abc)
    }
    
}
