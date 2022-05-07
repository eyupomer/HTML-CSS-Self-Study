const number1 = Number(document.querySelector('.number1').textContent);
const number2 = Number(document.querySelector('.number2').textContent);
const number3 = Number(document.querySelector('.number3').textContent);
const number4 = Number(document.querySelector('.number4').textContent);
const number5 = Number(document.querySelector('.number5').textContent);
const number6 = Number(document.querySelector('.number6').textContent);

const price1 = Number(document.querySelector('.price1').textContent);
const price2 = Number(document.querySelector('.price2').textContent);
const price3 = Number(document.querySelector('.price3').textContent);
const price4 = Number(document.querySelector('.price4').textContent);
const price5 = Number(document.querySelector('.price5').textContent);
const price6 = Number(document.querySelector('.price6').textContent);
const buton = document.querySelector('.btn-price');
buton.addEventListener('click', function () {


    let priceT1 = document.querySelector('.priceT1').textContent = number1 * price1;
    let priceT2 = document.querySelector('.priceT2').textContent = number2 * price2;
    let priceT3 = document.querySelector('.priceT3').textContent = number3 * price3;
    let priceT4 = document.querySelector('.priceT4').textContent = number4 * price4;
    let priceT5 = document.querySelector('.priceT5').textContent = number5 * price5;
    let priceT6 = document.querySelector('.priceT6').textContent = number6 * price6;

    document.querySelector('.total-price').textContent = priceT1 + priceT2 + priceT3 + priceT4 + priceT5 + priceT6;
})

const delete1 = document.querySelector('.icon');
const delete2 = document.querySelector('.icon2');
const delete3 = document.querySelector('.icon3');
const delete4 = document.querySelector('.icon4');
const delete5 = document.querySelector('.icon5');
const delete6 = document.querySelector('.icon6');

delete1.addEventListener('click', function() {
    document.querySelector('.priceT1').textContent = '';
})
delete2.addEventListener('click', function() {
    document.querySelector('.priceT2').textContent = '';
})
delete3.addEventListener('click', function() {
    document.querySelector('.priceT3').textContent = '';
})
delete4.addEventListener('click', function() {
    document.querySelector('.priceT4').textContent = '';
})
delete5.addEventListener('click', function() {
    document.querySelector('.priceT5').textContent = '';
})
delete6.addEventListener('click', function() {
    document.querySelector('.priceT6').textContent = '';
})
