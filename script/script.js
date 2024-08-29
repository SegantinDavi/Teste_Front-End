const phoneView1 = document.querySelector('#phoneView1');
const phoneView2 = document.querySelector('#phoneView2');
const phoneExample = 11999999999;//exemplo para uso no método que formata o numero de telefone
const phoneInput = document.querySelector('#phoneInput');

phoneView1.addEventListener('click', () => {
    phoneView1.innerHTML = formatPhone(phoneExample);
});

phoneView2.addEventListener('click', () => {
    phoneView2.innerHTML = formatPhone(phoneExample);
});

phoneInput.addEventListener('keyup', () => {
    const inputValue = phoneInput.value;
    phoneInput.value = phoneMask(inputValue);
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
    digit = digit.replace(/(\d{2})(\d)/,'($1) $2');
    digit = digit.replace(/(\d)(\d{4})$/,'$1-$2');
    return digit;
}