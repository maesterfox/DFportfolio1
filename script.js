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
      url: "./php/mailer.php", // The path to your PHP mailer script
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        // Handle success (e.g., showing a success message)
        console.log("Success:", response);
        $("#contactModal").modal("hide"); // Hide the modal after submission
      },
      error: function (error) {
        // Handle error
        console.error("Error:", error);
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
