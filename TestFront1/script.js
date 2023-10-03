const warningText = document.getElementById('warningText');
const warningName = document.getElementById('warningName');
const starName = document.getElementById('starName')
const warningEmail = document.getElementById('warningEmail');
const starEmail = document.getElementById('starEmail')
const warningPhone = document.getElementById('warningPhone');
const starPhone = document.getElementById('starPhone')
const registerModal = document.getElementById('registerModal');
const cookieModal = document.getElementById('cookieModal');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const companyName = document.getElementById('companyName');
const websiteName = document.getElementById('websiteName');
const cookieExit = document.getElementById('cookieExit')
const modalExit = document.getElementById('modalExit')
const modalButton = document.getElementById('modalButton')
const topnavBusiness = document.getElementById('topnavBusiness')
const topnavCustomers = document.getElementById('topnavCustomers')
const navbarButton = document.getElementById('navbarButton')
const navbarCustomerButton = document.getElementById('navbarCustomerContainer')
const navbarCustomer = document.getElementById('navbarCustomer')
const modalApprovalTab = document.getElementById('modalApproval')
const modalForm =document.getElementById('modalForm')
const approvalButton= document.getElementById('approvalButton')
const burger =document.getElementById('navbarBurger')
const burgerMenu = document.getElementById('burgerMenu')
const burgerExit = document.getElementById('burgerExit')

let ativatorArray = document.querySelectorAll('.modal__activator')

let cookieExiters = document.querySelectorAll('.cookieButton')

for (let index = 0; index < cookieExiters.length; index++) {
    cookieExiters[index].addEventListener('click', cookieClose)
    
}

for (let index = 0; index < ativatorArray.length; index++) {
    ativatorArray[index].addEventListener('click', modalOpen)
    
}



approvalButton.addEventListener('click', modalReset)

modalButton.addEventListener('click', modalApprove)

topnavBusiness.addEventListener('click',topnavCheckBusiness)

topnavCustomers.addEventListener('click',topnavCheckCustomers)

registerModal.addEventListener('input', checking)

cookieExit.addEventListener('click', cookieClose)

burgerExit.addEventListener('click',burgerClose)

modalExit.addEventListener('click', modalClose)

burger.addEventListener('click', burgerOpen)

function modalReset(){
    registerModal.classList.add('hidden')
    modalApprovalTab.classList.add("hidden")
    modalForm.classList.remove('hidden')
}

function modalApprove(){
    modalApprovalTab.classList.remove("hidden")
    modalForm.classList.add('hidden')
}


function topnavCheckBusiness(){
        topnavBusiness.classList.add('topnav__item__active')
        topnavCustomers.classList.remove('topnav__item__active')
        navbarButton.classList.remove('hidden')
        navbarCustomerButton.classList.add('hidden')
        navbarCustomer.classList.add('hidden')
}

function topnavCheckCustomers(){
    topnavBusiness.classList.remove('topnav__item__active')
    topnavCustomers.classList.add('topnav__item__active')
    navbarButton.classList.add('hidden')
    navbarCustomerButton.classList.remove('hidden')
    navbarCustomer.classList.remove('hidden')
}





function modalOpen(){
    registerModal.classList.remove('hidden')
    burgerMenu.classList.add('hidden')
}

function burgerClose(){
    burgerMenu.classList.add('hidden')
}

function burgerOpen(){
    burgerMenu.classList.remove('hidden')
}

function cookieClose(){
cookieModal.classList.add('hidden')
}
function modalClose(){
    registerModal.classList.add('hidden')
}

const nameObject = {
    inputfield: nameInput,
    redText: warningName,
    redStar: starName
}
const emailObject = {
    inputfield: emailInput,
    redText: warningEmail,
    redStar: starEmail
}

const phoneObject = {
    inputfield: phoneNumberInput,
    redText: warningPhone,
    redStar: starPhone
}

const isValidEmail = email => {
    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    return true
}




function checking(){
    let nameValue = nameInput.value.trim()
    let emailValue = emailInput.value.trim()
    let phoneNumberValue = phoneNumberInput.value.trim()
    if (nameValue == '' ){
        displayNegative(nameObject, 'this field is required')
    }else{
        displayPositive(nameObject)}
        
    if (emailValue == ''){
        displayNegative(emailObject, 'this field is required')
    }else if(!isValidEmail(emailValue)){
        displayNegative(emailObject, 'invalid email')
    }else{
        displayPositive(emailObject)}

    if (phoneNumberValue == ''){
        displayNegative(phoneObject, 'this field is required')
    }else{
        displayPositive(phoneObject)}
    if (nameValue && emailValue && isValidEmail(emailValue) && phoneNumberValue != ''){
        warningText.classList.add('hidden')
        modalButton.classList.add('btn')
        modalButton.classList.remove('btn-disabled')
        modalButton.toggleAttribute('disabled')
    }else{
        warningText.classList.remove('hidden')
        modalButton.classList.remove('btn')
        modalButton.classList.add('btn-disabled')
        modalButton.toggleAttribute('disabled')
        
    }
}

function displayNegative(objec,Message){
    objec.inputfield.classList.add('input-error')
    objec.redText.classList.remove("hidden")
    objec.redText.innerText = Message
    objec.redStar.classList.remove("hidden")
}
function displayPositive(objec){
    objec.inputfield.classList.remove('input-error')
    objec.redText.classList.add("hidden")
    objec.redStar.classList.add("hidden")
}