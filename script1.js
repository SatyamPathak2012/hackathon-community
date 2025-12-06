function validateForm() {
        const email = document.getElementById("email").value;
        const confirmEmail = document.getElementById("confirmEmail").value;
        const pass = document.getElementById("password").value;
        const confirmPass = document.getElementById("confirmPassword").value;
        const msg = document.getElementById("msg");

        if (email === "") {
          msg.style.color = "red";
          msg.textContent = "Email cannot be empty";
          return false;
        }

        if (pass === "") {
          msg.style.color = "red";
          msg.textContent = "Password cannot be empty";
          return false;
        }

        if (email !== confirmEmail) {
          msg.style.color = "red";
          msg.textContent = "Emails do not match!";
          return false;
        }

        if (pass !== confirmPass) {
          msg.style.color = "red";
          msg.textContent = "Passwords do not match!";
          return false;
        } else {
          return true;
        }
      }