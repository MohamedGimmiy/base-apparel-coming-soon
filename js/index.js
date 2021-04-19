let email = document.querySelector('input');
let submit = document.querySelector('button');
let error = document.querySelector('.error-msg');

submit.addEventListener('click', (e) => {

    e.preventDefault();
    console.log(email.value)
    if(email.value === '' || email.value == null){
        // show error msg
        error.classList.remove('d-none');
    } else if(email.value.split("").filter(v => v === '@').length == 0 || 
            email.value.split("").filter(v => v === '@').length >1){
        error.classList.remove('d-none');
    }
     else{
        // submit
        error.classList.add('d-none');
        
    }
})

