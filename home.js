document.getElementById('press-card').addEventListener('click', async () => {
    await navigator.clipboard.writeText('press-card');
    alert('Text "press-card" copied to clipboard!');
  });
