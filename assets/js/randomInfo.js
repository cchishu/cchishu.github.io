document.addEventListener('DOMContentLoaded', function() {
  var infoButton = document.getElementById('random-info-btn');
  var infoDisplay = document.getElementById('about-me-text');

  infoButton.addEventListener('click', function() {
    fetch('/assets/js/info.js')
      .then(response => response.json())
      .then(data => {
        var randomIndex = Math.floor(Math.random() * data.length);
        infoDisplay.textContent = data[randomIndex];
      })
      .catch(error => console.error('Failed to load info:', error));
  });
});
