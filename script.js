let passEye = document.querySelector(".fa-eye")
let passText = document.querySelector("#inputPass")
let selectForm = document.querySelector("#selectForm")
let name = document.querySelector("#inputName")
let select = document.querySelector("select")
let passowrd = document.querySelector("#inputPass")
let mail = document.querySelector("#inputMail")
let mailSpan = document.querySelector("#mailSpan")
let button = document.querySelector("button")
let form = document.querySelector("form")
let mailFalse = document.querySelector("#mailFalse")
let mailCheck = true


passEye.addEventListener("mouseover",()=>{
    passText.setAttribute("type", "text")
    console.log("ddds")

})

passEye.addEventListener("mouseout", ()=>{
    passText.setAttribute("type", "password")
})

select.addEventListener("change",()=>{
        selectForm.style.transform = "translateY(-100%)"
})

mail.addEventListener("focusout",()=>{    
    let email = mail.value
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        mailCheck =  re.test(String(email).toLowerCase());
    }
    validateEmail(email)
    if(!mailCheck){
        mailFalse.style.display="block"
        mail.style.border="1px solid red"
        mailSpan.style.color="red"
    } else{
        mailFalse.style.display="none"
        mail.style.border="1px solid rgba(128, 128, 128, 0.11)"
        mailSpan.style.color="#989898"
    }
})



button.addEventListener("click",()=>{





})
console.log(passowrd.value)
setInterval(()=>{
    if(name.value.length > 0 && mail.value.length>0 && mailCheck && select.value != "" && passowrd.value.length > 8){
        button.style.background="#3577fa"
        button.style.color="white"
        button.style.pointerEvents="auto"
    } else{
        button.style.background="#ededed"
        button.style.color="#b5b5b5"
        button.style.pointerEvents="none"

    }
},100)


