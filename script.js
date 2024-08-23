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

//--------------------------------Trex-----------------------------//
const canvas = document.getElementById('t-rex-game-canvas');
const context = canvas.getContext('2d');

const trex = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    dy: 0,
    gravity: 0.6,
    jump: -10,
    grounded: false
};

const obstacle = {
    x: canvas.width,
    y: 160,
    width: 20,
    height: 20,
    dx: -5
};

let isJumping = false;
let score = 0;
let isPlaying = false;

function drawTrex() {
    context.fillStyle = '#555';
    context.fillRect(trex.x, trex.y, trex.width, trex.height);
}

function drawObstacle() {
    context.fillStyle = '#555';
    context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (isPlaying) {
        // T-Rex jump and gravity
        if (isJumping) {
            trex.dy = trex.jump;
            isJumping = false;
        }

        trex.dy += trex.gravity;
        trex.y += trex.dy;

        if (trex.y > 150) {
            trex.y = 150;
            trex.dy = 0;
            trex.grounded = true;
        } else {
            trex.grounded = false;
        }

        // Move obstacle
        obstacle.x += obstacle.dx;

        if (obstacle.x + obstacle.width < 0) {
            obstacle.x = canvas.width;
            score++;
        }

        // Collision detection
        if (trex.x < obstacle.x + obstacle.width &&
            trex.x + trex.width > obstacle.x &&
            trex.y < obstacle.y + obstacle.height &&
            trex.y + trex.height > obstacle.y) {
            alert('Game Over! Your score: ' + score);
            document.location.reload();
        }

        drawTrex();
        drawObstacle();
    }

    requestAnimationFrame(update);
}

canvas.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && trex.grounded) {
        isJumping = true;
    }
});

canvas.addEventListener('focus', () => {
    isPlaying = true;
});

canvas.addEventListener('blur', () => {
    isPlaying = false;
});

canvas.setAttribute('tabindex', '1'); // Make canvas focusable
canvas.focus();

update();

