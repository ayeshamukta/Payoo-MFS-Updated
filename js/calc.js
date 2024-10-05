// document.getElementById('add-money').addEventListener('click',function(event)
// {
//     event.preventDefault();
//     hide('add-container');
    
    
// })

document.getElementById('add-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const currentBalance = getTextInput('balance');
    const addAmount = parseFloat(getFormInput('add-num'));
    const addPin = getFormInput('add-pin');
    if(addPin ===  '1234' && typeof addAmount === 'number')
    {
        const newBalance = parseFloat(addAmount) + parseFloat(currentBalance);
        document.getElementById('balance').innerText = newBalance;
        addHistory("Added Money");

    }
    else
    {
        alert('Invalid Input');
        return;
    }

    
    
    
    
})

document.getElementById('out-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const currentBalance = parseFloat(getTextInput('balance'));
    const outAmount = parseFloat(getFormInput('out-num'));
    const outPin = getFormInput('out-pin');
    if(outPin ===  '1234' && outAmount<=currentBalance)
    {
        const newBalance =  currentBalance - outAmount;
        document.getElementById('balance').innerText = newBalance;
    }
    else
    {
        alert('Invalid Input');
        return;
    }

    addHistory("Cash Out");   
})
document.getElementById('transfer-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const currentBalance = parseFloat(getTextInput('balance'));
    const transAmount = parseFloat(getFormInput('transfer-num'));
    const transPin = getFormInput('transfer-pin');
    if(transPin ===  '1234' && transAmount<=currentBalance)
    {
        const newBalance =  currentBalance - transAmount;
        document.getElementById('balance').innerText = newBalance;
    }
    else
    {
        alert('Invalid Input');
        return;
    }
    addHistory("Transfered Money");
})
document.getElementById('bonus-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const currentBalance = parseFloat(getTextInput('balance'));
    const bonusAmount = getFormInput('bonus-coupon');
    
    if(bonusAmount === 'hundred')
    {
        const newBalance =  currentBalance + 100;
        document.getElementById('balance').innerText = newBalance;
    }
    else
    {
        alert('Invalid Coupon');
        
    }

    
    addHistory("Got Bonus");
    
    
})
document.getElementById('paybill-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    document.getElementById('pay-bill-container').classList.add('hidden');
    
    
})