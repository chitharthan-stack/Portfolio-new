//--------------------------------Text Animation-----------------------------//

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".text-animation").forEach((element) => {
    observer.observe(element);
  });
});

//--------------------------------Lottie-----------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const lottiePlayer = document.getElementById("lottie");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottiePlayer.play();
        } else {
          lottiePlayer.stop();
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(lottiePlayer);
});

//--------------------------------multiple color themes-----------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // Theme color sets
  const themes = {
    red: {
      primary: "#ee0000",      // Red
      secondary: "#f8f8f8",    // Light gray
    },
    blue: {
      primary: "#1e009f",      // Navy Blue
      secondary: "	#ffb800",    // Gold
    },
    green: {
      primary: "#000000",      // Black
      secondary: "#ffffff",    // White
    },
  };

  // Function to apply theme
  function applyTheme(themeName) {
    const theme = themes[themeName];
    if (theme) {
      root.style.setProperty("--primary-color", theme.primary);
      root.style.setProperty("--secondary-color", theme.secondary);
    }
  }

  // Bind buttons
  const redBtn = document.getElementById("theme-red");
  const blueBtn = document.getElementById("theme-blue");
  const greenBtn = document.getElementById("theme-green");

  if (redBtn) redBtn.addEventListener("click", () => applyTheme("red"));
  if (blueBtn) blueBtn.addEventListener("click", () => applyTheme("blue"));
  if (greenBtn) greenBtn.addEventListener("click", () => applyTheme("green"));
});







