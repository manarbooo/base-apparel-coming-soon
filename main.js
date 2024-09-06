const errorMessage = document.querySelector('.errorMessage');
const userInput = document.querySelector('.userInput');
const form = document.querySelector('.contentForm');
const errorIcon = document.querySelector('.iconError');


function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = userInput.value.trim();

    if(email === ""){
        errorMessage.textContent = "Please enter your email address.";
        errorIcon.style.visibility = 'visible';
        userInput.style.borderColor = "hsl(0, 93%, 68%)";
    }
    else if(!isValidEmail(email)){
        errorMessage.textContent = "Please enter a valid email address.";
        errorIcon.style.visibility = 'visible';
        userInput.style.borderColor = "hsl(0, 93%, 68%)";
    }
    else{
        errorMessage.textContent = "Email registered correctly!";
        errorIcon.style.visibility = 'hidden';
        userInput.style.borderColor = "hsl(0, 36%, 70%)";
        errorMessage.style.color = 'green';


        setTimeout(()=>{
          window.location.reload();
        }, 2000)

    }
});

