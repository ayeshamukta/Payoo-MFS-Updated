function showSection(id)
{
    document.getElementById('add-container').classList.add('hidden');
    document.getElementById('cash-container').classList.add('hidden');
    document.getElementById('transfer-container').classList.add('hidden');
    document.getElementById('bonus-container').classList.add('hidden');
    document.getElementById('pay-container').classList.add('hidden');
    document.getElementById('transactions-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}