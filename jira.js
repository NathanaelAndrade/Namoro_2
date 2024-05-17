document.getElementById('envelope').addEventListener('click', function() {
  document.getElementById('message').style.display = 'block';
  this.style.display = 'none'; // Esconde o ícone do envelope
});
