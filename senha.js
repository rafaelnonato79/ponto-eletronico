function mostrarSenha() {
    var passwordField = document.getElementById('senha');
    var toggleButton = document.querySelector('.visivel-senha');
    
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleButton.classList.remove('fa-eye');
      toggleButton.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      toggleButton.classList.remove('fa-eye-slash');
      toggleButton.classList.add('fa-eye');
    }
  }