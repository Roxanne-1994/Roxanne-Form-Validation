document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    let valid = true;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (name.length < 3) {
      document.getElementById("nameError").textContent = "Name must be at least 3 characters";
      valid = false;
    }
  
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      valid = false;
    }
  
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
      valid = false;
    }
  
    if (valid) {
      alert("Form submitted successfully!");
      // You could also submit the form here with fetch() or FormData
    }
  });
  