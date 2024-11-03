const form = document.getElementById('form');
const email = document.getElementById('email');
const inputFiled = document.getElementById('email');
const errorElement = document.getElementById('error'); 
const regex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);


const dismissBtn = document.getElementById('dismiss-btn');



if(document.getElementById('email')){
    form.addEventListener('submit',(e)=>{
        if(!email.value.match(regex)){
            let message =[];
            message.push('Please enter a valid email')
            email.classList.add('error')
            email.style.borderColor = 'red';
            email.style.background = 'pink';
            email.addEventListener('click', ()=> {
                email.classList.remove('error')
                errorElement.style.display = 'none'
            })
            if(message.length > 0){
                errorElement.innerText = message.join(',')
                e.preventDefault()
            }
        }

    })
    getEmail()
}else if(document.getElementById('credits')){
    dismissBtn.addEventListener('click', () => {
        window.location.href = '/index.html'
    })
    showEmail()
}

function getEmail(){
    const button = document.getElementById('save-btn')
    button.addEventListener('click', () => {
        const value = document.getElementById('email').value
        localStorage.setItem('userInput', value)
        
    })   
}

function showEmail(){
    const value = localStorage.getItem('userInput')
    document.getElementById('credits').textContent = value
}
