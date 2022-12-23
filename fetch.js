async function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => {console.log('a');return result.json()})
        .then(resultData=>{
            // console.log(resultData[0].address);
            for(let i=0;i<resultData.length;i++){
                let row=document.createElement('tr')
                row.classList.add('table-striped', 'newRow')
                let srData=document.createElement('td')
                let nameData=document.createElement('td')
                let userNameData=document.createElement('td')
                let emailData=document.createElement('td')
                let addressData=document.createElement('td')
                let phoneData=document.createElement('td')
                let websiteData=document.createElement('td')
                let companyData=document.createElement('td')
    
                srData.innerText=resultData[i].id
                nameData.innerText=resultData[i].name
                userNameData.innerText=resultData[i].username
                emailData.innerText=resultData[i].email
                addressData.innerText=`${resultData[i].address.street}, ${resultData[i].address.suite}, ${resultData[i].address.city}, ${resultData[i].address.zipcode}`
                phoneData.innerText=resultData[i].phone.split('x')[0]
                websiteData.innerText=resultData[i].website
                companyData.innerText=resultData[i].company.name
    
                row.append(srData,nameData,userNameData,emailData,addressData,phoneData,websiteData,companyData)
                document.getElementsByClassName('form-table')[0].tBodies[0].appendChild(row)
        }
        return resultData.length
        // localStorage.setItem('tableData',JSON.stringify(formData))
    })
    .then((len)=>{
        for(let i=0;i<formData.length;i++){
            let row=document.createElement('tr')
            row.classList.add('table-striped', 'newRow')
            let srData=document.createElement('td')
            let nameData=document.createElement('td')
            let userNameData=document.createElement('td')
            let emailData=document.createElement('td')
            let addressData=document.createElement('td')
            let phoneData=document.createElement('td')
            let websiteData=document.createElement('td')
            let companyData=document.createElement('td')
            console.log(len)
            srData.innerText=formData[i].sr+len
            nameData.innerText=formData[i].name
            userNameData.innerText=formData[i].username
            emailData.innerText=formData[i].email
            addressData.innerText=formData[i].address
            phoneData.innerText=formData[i].phone
            websiteData.innerText=formData[i].website
            companyData.innerText=formData[i].company
        
            row.append(srData,nameData,userNameData,emailData,addressData,phoneData,websiteData,companyData)
            document.getElementsByClassName('form-table')[0].tBodies[0].appendChild(row)
        }
    })
}