function getFormInput(id)
{
    const input = document.getElementById(id).value;
    return input;
}
function getTextInput(id)
{
    const input = document.getElementById(id).innerText;
    return input;
}

function hide(id)
{
    document.getElementById('add-container').classList.add('hidden');
    document.getElementById('cash-container').classList.add('hidden');
    document.getElementById('transfer-container').classList.add('hidden');
    document.getElementById('bonus-container').classList.add('hidden');
    document.getElementById('pay-bill-container').classList.add('hidden');
    document.getElementById('transactions-container').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');

   
}