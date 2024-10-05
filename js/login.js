document.getElementById('login-btn').addEventListener('click',function(event)
{
    event.preventDefault();

    const logNum = getFormInput('login-number');
    const logPin = getFormInput('login-pin');
    
    if(logNum === '01641' && logPin === '1234')
    {
        window.location.href = './home.html';
    }
    
})
