document.addEventListener("DOMContentLoaded", function() {
  fetch('/assets/js/mottos.js')
    .then(response => response.json())
    .then(mottos => {
      const randomIndex = Math.floor(Math.random() * mottos.length);
      const motto = mottos[randomIndex];
      document.getElementById('motto-display').innerText = motto;
    })
    .catch(error => console.error('Error loading the mottos:', error));
});
