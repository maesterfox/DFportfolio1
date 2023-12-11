// JavaScript to fade out both the loader container and the image over 2 seconds, then remove the loader

document.addEventListener("DOMContentLoaded", function () {
  // Wait for 3 seconds before starting the fade-out process
  setTimeout(function () {
    var loader = document.querySelector(".loader-container");
    var image = document.querySelector(".loader-container .loader"); // Selecting the image inside the loader container
    if (loader && image) {
      // Start the fade-out for both the container and the image
      loader.style.transition = "opacity 3s";
      loader.style.opacity = 0;
      image.style.transition = "opacity 3s";
      image.style.opacity = 0;

      // Wait for 2 seconds to complete the fade-out, then remove the loader
      setTimeout(function () {
        loader.remove();
      }, 3000); // 2000 milliseconds = 2 seconds
    }
  }, 2500); // 3000 milliseconds = 3 seconds
});

// Menu toggler
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// email form php fetch and modal

$(document).ready(function () {
  // Handling form submission
  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    $.ajax({
      type: "POST",
      url: "./php/mailer.php",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log("Success:", response);
        $("#successModal").modal("show"); // Show success modal
        $("#contactForm").trigger("reset"); // Reset the form fields
      },
      error: function (error) {
        console.error("Error:", error);
        $("#errorModal").modal("show"); // Show error modal
      },
    });
  });
});

// JavaScript event listeners are attached to the LinkedIn and GitHub icons

document.addEventListener("DOMContentLoaded", function () {
  // LinkedIn Icon
  document
    .querySelector(".fa-linkedin")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      window.open("https://linkedin.com/in/davidfoxtechcode", "_blank");
    });

  // GitHub Icon
  document
    .querySelector(".fa-github")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      window.open("https://github.com/maesterfox/", "_blank");
    });

  // Stack Overflow Icon
  document
    .querySelector(".fa-stack-overflow")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      window.open(
        "https://stackoverflow.com/users/22631288/david-fox",
        "_blank"
      );
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // LinkedIn Icon in Contact Section
  document
    .querySelector(".linkedin-contact-icon")
    .addEventListener("click", function () {
      window.open("https://linkedin.com/in/davidfoxtechcode", "_blank");
    });

  // GitHub Icon in Contact Section
  document
    .querySelector(".github-contact-icon")
    .addEventListener("click", function () {
      window.open("https://github.com/maesterfox/", "_blank");
    });

  // Stack Overflow Icon in Contact Section
  document
    .querySelector(".stack-overflow-contact-icon")
    .addEventListener("click", function () {
      window.open(
        "https://stackoverflow.com/users/22631288/david-fox",
        "_blank"
      );
    });
});
