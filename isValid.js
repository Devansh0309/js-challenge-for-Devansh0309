let temp=JSON.parse(localStorage.getItem('tableData'))
let formData=temp?temp:[]
let error=true
let rowId=formData.length+1
console.log(rowId)
let firstName=document.getElementById('firstNameInput')
let firstNameValid=document.getElementsByClassName('firstNameValid')[0]
let lastName=document.getElementById('lastNameInput')
let lastNameValid=document.getElementsByClassName('lastNameValid')[0]
let userName=document.getElementById('userNameInput')
let userNameValid=document.getElementsByClassName('userNameValid')[0]
let email=document.getElementById('emailInput')
let phone=document.getElementById('phoneNo.Input')
let phoneValid=document.getElementsByClassName('phoneValid')[0]
let address=document.getElementById('addressInput')
let addressValid=document.getElementsByClassName('addressValid')[0]
let website=document.getElementById('websiteInput')
let company=document.getElementById('companyInput')
function isValid(fieldInput,messg1,messg2){
    if(messg1==='firstNameValid' || messg1==='lastNameValid'){
        if(fieldInput.value.length>=3 && fieldInput.value.match(/^[a-zA-Z]*$/)){
            document.getElementsByClassName(messg1)[0].style.display='block'
            document.getElementsByClassName(messg2)[0].style.display='none'
            error=false
        }
        else{
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
    }
    else if(messg1==='userNameValid'){
        if(fieldInput.value && (fieldInput.value.match(/^[a-zA-Z0-9.]*$/))){
            document.getElementsByClassName(messg1)[0].style.display='block'
            document.getElementsByClassName(messg2)[0].style.display='none'
            error=false
        }
        else{
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
    }
    else if(!messg1 && messg2==='emailInvalid'){
        if(fieldInput.value.length<6 || !fieldInput.value.includes('@') || !fieldInput.value.includes('.') || fieldInput.value.indexOf('@')===-1 || !(fieldInput.value.indexOf('@')==fieldInput.value.lastIndexOf('@')) || fieldInput.value.length-fieldInput.value.indexOf('.')<3 || fieldInput.value.indexOf('.')-fieldInput.value.indexOf('@')<2){

            document.getElementsByClassName(messg2)[0].style.display='block'
            error=true
        }
        else{
            document.getElementsByClassName(messg2)[0].style.display='none'
            error=false
        }
    }
    else if(messg1==='phoneValid'){
        if(fieldInput.value.length<3 && !fieldInput.value.match(/^[0-9]*$/)){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length<3 && fieldInput.value.match(/^[0-9]*$/)){
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===3 && fieldInput.value.match(/^[0-9]*$/)){
            fieldInput.value=fieldInput.value+"-"
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===3 && !fieldInput.value.match(/^[0-9]*$/)){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length<7 &&(!fieldInput.value.match(/^[0-9-]*$/) || fieldInput.value.lastIndexOf('-')>3)){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length<7 &&fieldInput.value.match(/^[0-9-]*$/) && fieldInput.value.lastIndexOf('-')===3){
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===7 && fieldInput.value.match(/^[0-9-]*$/) && fieldInput.value.indexOf('-')===3 && fieldInput.value.lastIndexOf('-')===3){
            fieldInput.value=fieldInput.value+"-"
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===7 && (!fieldInput.value.match(/^[0-9-]*$/) ||fieldInput.value.indexOf('-')>3 || fieldInput.value.lastIndexOf('-')>3)){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length>7 && fieldInput.value.length<12 && (!fieldInput.value.match(/^[0-9-]*$/) || fieldInput.value.lastIndexOf('-')>7 || (fieldInput.value.indexOf('-',4)>3 && fieldInput.value.indexOf('-',4)<7))){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length>7 && fieldInput.value.length<12  && fieldInput.value.match(/^[0-9-]*$/) && fieldInput.value.lastIndexOf('-')===7 && fieldInput.value.indexOf('-',4)===7){
            console.log('ran')
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===12 && ( !fieldInput.value.match(/^[0-9-]*$/) || fieldInput.value.lastIndexOf('-')>7)){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
        else if(fieldInput.value.length===12 && fieldInput.value.match(/^[0-9-]*$/) &&  fieldInput.value.lastIndexOf('-')===7){
            document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='block'
            error=false
        }
        else if(fieldInput.value.length>12){
            document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true
        }
    }
    else if(messg1==='addressValid'){
        if(fieldInput.value){
             document.getElementsByClassName(messg2)[0].style.display='none'
            document.getElementsByClassName(messg1)[0].style.display='block'
            error=false
        }
        else{
           document.getElementsByClassName(messg2)[0].style.display='block'
            document.getElementsByClassName(messg1)[0].style.display='none'
            error=true 
        }
    }
    else{ //submit btn
        if(error==false){
            alert('Form submitted successfully!')
            let obj={sr:rowId,name:firstName.value+lastName.value,username:userName.value,email:email.value,address:address.value,phone:phone.value,website:website.value,company:company.value}
            formData=[...formData,obj]

            localStorage.setItem('tableData',JSON.stringify(formData))
            fetchData()
            
            firstName.value=''
            firstNameValid.style.display='none'
            lastName.value=''
            lastNameValid.style.display='none'
            email.value=''
            userName.value=''
            userNameValid.style.display='none'
            phone.value=''
            phoneValid.style.display='none'
            address.value=''
            addressValid.style.display='none'
            website.value=''
            company.value=''
            error=true
        }
        else{
            alert('Error on submitting form')
        }
    }
}