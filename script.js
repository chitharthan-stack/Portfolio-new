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








