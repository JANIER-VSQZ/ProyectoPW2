document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".job-card__form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
    nameInput.setCustomValidity("");
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
    phoneInput.setCustomValidity("");
  });

  emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let valid = true;

    if (!name) {
      nameInput.setCustomValidity("Por favor, ingrese su nombre.");
      nameInput.reportValidity();
      valid = false;
    }

    if (!emailRegex.test(email)) {
      emailInput.setCustomValidity("Por favor, ingrese un correo electrónico válido.");
      emailInput.reportValidity();
      valid = false;
    }

    if (!phoneRegex.test(phone)) {
      phoneInput.setCustomValidity("El número de teléfono debe tener exactamente 10 dígitos.");
      phoneInput.reportValidity();
      valid = false;
    }

    if (valid) {
      if (confirm("¡Formulario enviado con éxito!")) {
        window.location.href = "index.html";
      }
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("jobForm");

//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const phoneInput = document.getElementById("phone");

//     const nameError = document.getElementById("name-error");
//     const emailError = document.getElementById("email-error");
//     const phoneError = document.getElementById("phone-error");

//     // Only letters while typing name
//     nameInput.addEventListener("input", () => {
//     nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
//     });

//     // Only numbers while typing phone
//     phoneInput.addEventListener("input", () => {
//     phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
//     });

//     form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Clear errors
//     nameError.textContent = "";
//     emailError.textContent = "";
//     phoneError.textContent = "";

//     let valid = true;
//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const phone = phoneInput.value.trim();

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const phonePattern = /^\d{10}$/;

//     if (!name) {
//         nameError.textContent = "Please enter your name.";
//         valid = false;
//     }

//     if (!emailPattern.test(email)) {
//         emailError.textContent = "Please enter a valid email address.";
//         valid = false;
//     }

//     if (!phonePattern.test(phone)) {
//         phoneError.textContent = "Phone number must be exactly 10 digits.";
//         valid = false;
//     }

//     if (valid) {
//         alert("Success!");
//         window.location.href = "index.html";
//     }
//     });
// });