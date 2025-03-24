document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent click from bubbling up
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active"); // Changed 'open' to 'active' to match CSS
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  // Close menu when clicking a nav link on mobile
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animateNumbers = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const achievementNumbers = document.querySelectorAll(
          ".achievement-number"
        );
        achievementNumbers.forEach((numberElement) => {
          const finalNumber = parseInt(numberElement.textContent);
          let currentNumber = 0;

          const updateNumber = () => {
            if (currentNumber < finalNumber) {
              currentNumber += Math.ceil(finalNumber / 50);
              numberElement.textContent = currentNumber + "+";
              setTimeout(updateNumber, 50);
            } else {
              numberElement.textContent = finalNumber + "+";
            }
          };

          updateNumber();
        });
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(animateNumbers, {
    threshold: 0.5,
  });

  observer.observe(document.querySelector(".achievements-grid"));
});
