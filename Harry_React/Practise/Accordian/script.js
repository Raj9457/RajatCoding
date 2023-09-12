



const accordions = document.querySelectorAll('.accordion');
console.log(accordions)
accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");
  
    // Reset error message
    errorElement.innerHTML = "";
  
    // Validate name (minimum length of 2 characters)
    if (name.length < 2) {
      errorElement.innerHTML += "Name must be at least 2 characters.<br>";
    }
  
    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorElement.innerHTML += "Invalid email address.<br>";
    }
  
    // Validate password (minimum length of 6 characters)
    if (password.length < 6) {
      errorElement.innerHTML += "Password must be at least 6 characters.<br>";
    }
  
    // If there are no validation errors, submit the form
    if (errorElement.innerHTML === "") {
      document.getElementById("myForm").submit();
    }
  });
  