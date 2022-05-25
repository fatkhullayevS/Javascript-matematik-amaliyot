const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elResult = document.querySelector(".result");
const elBtn = document.querySelector('.form-btn');


elBtn.addEventListener('click', function (e){
    e.preventDefault()

    const inputValue = elInput.value;

    if(inputValue % 3 === 0 && inputValue % 5 === 0){
        elResult.textContent = "FizzBuzz";
    } else  if(inputValue % 3 === 0){
        elResult.textContent = "Fizz";
    } else if(inputValue % 5 === 0){
        elResult.textContent = "Buzz";
    }
    else if(inputValue % 3 !== 0 && inputValue % 5 !== 0){
        elResult.textContent = `${inputValue}`;
    }

})