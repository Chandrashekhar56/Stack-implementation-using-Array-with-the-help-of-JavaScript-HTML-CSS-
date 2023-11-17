var stack = [];
var total_number = "";

function push_op() 
{
    total_number = document.getElementById('input_total_number').value;
    document.querySelector('input[id="input_total_number"]').disabled = true;

    if (total_number !== "" && total_number > 0)
    {
        if (stack.length >= total_number)
        {
            alert("Stack is already full");
            document.querySelector('button[onclick="push_op()"]').disabled = true;
            return;
        }

        var inputValue = prompt("Enter number");
        if(inputValue!=="" && inputValue!==null)
        {
            stack.push(inputValue);
            updateDisplay();
        }
        else
        {
            alert("Please enter any number");
        }
    }
    else 
    {
        alert("Please enter valid total number of Stack Elements");
    }
}

function pop_op() 
{
    if(stack.length!==0)
    {
        stack.pop();
        document.querySelector('button[onclick="push_op()"]').disabled = false;
        document.querySelector('input[id="input_total_number"]').disabled = true;
        updateDisplay();
    }
    else
    {
        alert("Stack is already empty");
    }
}

function updateDisplay() 
{
    var containerDiv = document.getElementById('stack');
    containerDiv.innerHTML = "";
    for (var i = stack.length-1; i>=0; i--) 
    {   
        var newDiv = document.createElement('div');
        newDiv.textContent = stack[i];
        newDiv.className = 'stack-item';
        containerDiv.appendChild(newDiv);
        containerDiv.style.backgroundColor='black';
        containerDiv.style.border='3px solid yellow ';
    }
    if(stack.length<=0)
    {
        containerDiv.style.backgroundColor='white';
        containerDiv.style.border='white';   
    }
}