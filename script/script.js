const phoneView1 = document.querySelector('#phoneView1');
const phoneView2 = document.querySelector('#phoneView2');
const phoneExample = 11999999999;//exemplo para uso no método que formata o numero de telefone
const phoneInput = document.querySelector('#phoneInput');
const cpfInput = document.querySelector('#cpfInput');
const btnSubmit = document.querySelector('#btnSubmit');

phoneView1.addEventListener('click', () => {
    phoneView1.innerHTML = formatPhone(phoneExample);
});

phoneView2.addEventListener('click', () => {
    phoneView2.innerHTML = formatPhone(phoneExample);
});

phoneInput.addEventListener('keydown', (event) => {
    numCheck(event);
    let inputValue = phoneInput.value;
    phoneInput.value = phoneMask(inputValue);
});

cpfInput.addEventListener('keydown', (event) => {
    numCheck(event);
    let inputValue = cpfInput.value;
    cpfInput.value = cpfMask(inputValue);
});

btnSubmit.addEventListener('click', () => {
    if (formCheck()) {
        alert('Mensagem eniada!');
    } else {
        alert('Preencha todos os campos');
    }
});

function formatPhone(number) {
    number = number.toString();
    number = number.replace(/\D/g,'');
    formatedNum = number.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    return formatedNum;
}

function phoneMask(digit) {
    if (!digit) return '';
    digit = digit.replace(/\D/g,'');
    digit = digit.replace(/(\d{2})(\d)/,'($1)$2');
    digit = digit.replace(/(\d)(\d{4})$/,'$1-$2');
    return digit;
}

function cpfMask(digit) {
    if (!digit) return '';
    digit = digit.replace(/\D/g,'');
    digit = digit.replace(/(\d{3})(\d)/,'$1.$2');
    digit = digit.replace(/(\d{3})(\d)/,'$1.$2');
    digit = digit.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return digit;
}

function numCheck(event) {
    if (event.key.length === 1 && event.key.match(/[^0-9]/)) {
        event.preventDefault(); 
    }
}

function formCheck() {
    let textInput = document.querySelectorAll('.form-input');
    for (let i = 0; i < textInput.length; i++) {
        if (textInput[i].value === '') return false;
    }
    return true;
}
