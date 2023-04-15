const Btns = document.querySelectorAll('nav button')
const LoginForm = document.getElementById('login-form')
const SigninForm = document.getElementById('signin-form')
const FormSection= document.querySelector('.forms')
const closeBtn = document.querySelectorAll('.close')
NewBtns = Array.from(Btns)
NewBtns.forEach(function(btn){
    btn.addEventListener("click",()=>{
        FormSection.style.zIndex="3"
        if(btn.classList.contains("login")){
                LoginForm.classList.add("active")
                SigninForm.classList.remove("active") 
        }
        if (btn.classList.contains("sign-in")) {
            SigninForm.classList.add("active") 
            LoginForm.classList.remove("active") 
        }
    })
})
closeBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        FormSection.style.zIndex = "0"
        LoginForm.classList.remove("active")
        SigninForm.classList.remove("active") 
    })
})
document.querySelector('.dropdown-btn').addEventListener("click",function(){
        document.querySelector('.dropdown').classList.toggle('active1')
})
