function addHistory(history) {
    const time = new Date();
    const historyContainer = document.getElementById('transactions-container');

    
    const bills = document.createElement('bil');

    
    bills.innerHTML = `
        <div class="hero-content">
            <img
                src="logo/payoo.png"
                class="w-[50px] shadow-2xl rounded-full" />
            <div>
                <h1 class="text-xl font-bold">${history}</h1>
                <p id="time" class="py-2">
                   Today: ${time.toLocaleTimeString()} on ${time.toLocaleDateString()}
                </p>
            </div>
        </div>
    `;

    
    historyContainer.append(bills);
}
