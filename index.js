let string = " ";
var buttons = document.querySelectorAll("button");
var arr = Array.from(buttons);

var numberOfButtons = document.querySelectorAll("button").length;
// console.log(numberOfButtons);
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        
        // var string = " ";
        var buttonHtml = e.target.innerHTML;
        
        if( buttonHtml=='C'){
            string = " ";
            document.querySelector("input").value=string;

        }
        else if(buttonHtml=='back'){
            string=string.slice(0,-1);
            document.querySelector("input").value=string;

        }
        else if(buttonHtml=='='){
            string=eval(string);
            document.querySelector("input").value=string;

        }
        else{
            string = string + buttonHtml;
            document.querySelector("input").value=string;

        }
        
        
    })

})










function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function modulo(num1,num2){
    return num1%num2;
}