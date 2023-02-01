
      document.getElementById('form').addEventListener('submit', function() {
        // Get the value of the name field.
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
      
        // Save the name in localStorage.
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("Login successfully");
        window.location.href="index.html";
      });

