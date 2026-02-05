$(document).ready(function() {
    $('#calculatorForm').submit(function(event) {
        event.preventDefault();
        
        const left = $('#leftOperand').val().trim();
        const right = $('#rightOperand').val().trim();
        const op = $('#operator').val();
        
        if (!isValidPositiveInteger(left) || !isValidPositiveInteger(right)) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }
        
        const leftNum = parseInt(left);
        const rightNum = parseInt(right);
        
        if ((op === '/' || op === '%') && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }
        
        let result;
        switch(op) {
            case '+':
                result = leftNum + rightNum;
                break;
            case '-':
                result = leftNum - rightNum;
                break;
            case '*':
                result = leftNum * rightNum;
                break;
            case '/':
                result = leftNum / rightNum;
                break;
            case '%':
                result = leftNum % rightNum;
                break;
        }
        
        alert(result);
        console.log(result);
    });
    
    function isValidPositiveInteger(value) {
        if (value === '') {
            return false;
        }
        
        const num = Number(value);
        
        if (isNaN(num) || !Number.isInteger(num) || num < 0) {
            return false;
        }
        
        return true;
    }
    
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});
