const calcBody = document.querySelector('.calculator-body');
const textForButtons = [7,8,9,4,5,6,1,2,3,0,'+','-','*','/','='];
const arrayStack = [];

for (let i = 0; i < 15; i++) {
    let buttonsDivs = document.createElement("button");
    buttonsDivs.setAttribute('class', 'buttons');
    buttonsDivs.innerText = textForButtons[i];
    buttonsDivs.setAttribute('ID', textForButtons[i])
    calcBody.appendChild(buttonsDivs);
}

let buttons = document.querySelectorAll('.buttons');
buttons.forEach(ele => {
    ele.addEventListener('click', function(e) {
        let buttonText = e.target.textContent;
        arrayStack.push(buttonText);
    });
});

function addtoArray(params) {
    
}

function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(arr) {
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    mul = mul * arr[i];
  }
  return mul;
};
