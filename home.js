// copy button functionality

const copyCounter = document.getElementById('copy');
let totalCopy = 0;

document.getElementById('copy1').addEventListener('click', async () => {
    await navigator.clipboard.writeText('999');
    alert('The number has been copied: 999');

    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});


document.getElementById('copy2').addEventListener('click', async () => {
    await navigator.clipboard.writeText('999');
    alert('The number has been copied 999');
// Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
  });

document.getElementById('copy3').addEventListener('click', async () => {
    await navigator.clipboard.writeText('999');
    alert('The number has been copied 999');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
  });

document.getElementById('copy4').addEventListener('click', async () => {
    await navigator.clipboard.writeText('1994-999999');
    alert('The number has been copied 1994-999999');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});

document.getElementById('copy5').addEventListener('click', async () => {
    await navigator.clipboard.writeText('109');
    alert('The number has been copied 109');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});

document.getElementById('copy6').addEventListener('click', async () => {
    await navigator.clipboard.writeText('106');
    alert('The number has been copied 106');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});

document.getElementById('copy7').addEventListener('click', async () => {
    await navigator.clipboard.writeText('16216');
    alert('The number has been copied 16216');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});

document.getElementById('copy8').addEventListener('click', async () => {
    await navigator.clipboard.writeText('16445');
    alert('The number has been copied 16445');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});

document.getElementById('copy9').addEventListener('click', async () => {
    await navigator.clipboard.writeText('163');
    alert('The number has been copied 163');
    // Nav counter update
    totalCopy++;
    copyCounter.textContent = totalCopy;
});


// love button functionality: 

const loveLogo = document.getElementById('love-logo');
const heartButtons = document.querySelectorAll('.bg-white button img[alt="heart"]');
let loveCount = 0;
heartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    loveCount++;
    loveLogo.textContent = loveCount;
  });
});




// call button plus clear button 

const coinCounter = document.getElementById("coin-count");
let totalCoin = parseInt(coinCounter.textContent);

const callHistoryContainer = document.createElement("div");
callHistoryContainer.id = "call-history";
callHistoryContainer.className = "bg-white mt-3 rounded-xl p-3 space-y-2 text-gray-700 text-sm";
document.querySelector(".col-span-3").appendChild(callHistoryContainer);

const clearButton = document.querySelector(".bg-green-500.bg-green-600");
clearButton.addEventListener("click", () => {
  callHistoryContainer.innerHTML = "";
  alert("✅ All call history cleared!");
});

for (let i = 1; i <= 9; i++) {
  const callButton = document.getElementById(`call${i}`);
  if (!callButton) continue; 

  callButton.addEventListener("click", (e) => {
    e.preventDefault();

    const parentCard = callButton.closest("section");
    const serviceName = parentCard.querySelector("h2").textContent;
    const number = parentCard.querySelector("h1").textContent;

    if (totalCoin < 20) {
      alert("You don't have enough coins. You need 20 coins to call.");
      return;
    }

    totalCoin -= 20;
    coinCounter.textContent = totalCoin;

    
    alert(`Calling ${serviceName} ${number}...`);

    
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    
    const newEntry = document.createElement("div");
    newEntry.className = "border-b pb-1";
    newEntry.innerHTML = `
      <div class="flex justify-between">
        <span>📞 ${serviceName} - ${number}</span>
        <span class="text-gray-400 text-xs">${time}</span>
      </div>
    `;
    callHistoryContainer.appendChild(newEntry);
  });
}
