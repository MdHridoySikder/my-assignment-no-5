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




