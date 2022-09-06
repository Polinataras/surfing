const form = document.querySelector("#form");
// console.log(form);
const sendBtn = document.querySelector("#send-btn");
const phone = document.querySelector("#phone");

phone.addEventListener('keydown', (e) => {
    let isNumber = false;
    let isDigit = false;

    if(e.key >=0 || e.key <= 9) {
        isNumber = true;
    }
    if(e.key == "+" || e.key == '-' || e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'Backspace') {
        isDigit = true;
    }

    if(!isNumber && !isDigit) {
        e.preventDefault();
    }
});



sendBtn.addEventListener('click', (e)=> {
   e.preventDefault();

//    if(isFromValid(form)) {
//     console.log('Сообщение отправлено');
//    } else {
//     console.log('Форма не валидна');
//    }

    if(isFromValid(form)) {
        const data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comment.value,
            to: form.elements.to.value
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
    } 

}); 
function isFromValid(form) {
    let isValid = true;

    if(!validation(form.elements.name)) {
        isValid = false;
    }
    if(!validation(form.elements.phone)) {
        isValid = false;
    }
    if(!validation(form.elements.comment)) {
        isValid = false;
    }

    return isValid;
   }

   function validation(element) {
    if (!element.checkValidity()) {
        element.nextElementSibling.textContent = element.validationMessage;
        element.classList.add('input-errors');
        return false;
    } else {
        element.nextElementSibling.textContent = '';
        element.classList.remove('input-errors');
        return true;
    }
   }