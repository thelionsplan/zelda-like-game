const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 32,
  speed: 4,
  color: 'green'
};

function update() {
  if (input.left) player.x -= player.speed;
  if (input.right) player.x += player.speed;
  if (input.up) player.y -= player.speed;
  if (input.down) player.y += player.speed;

  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

const input = {
  up: false,
  down: false,
  left: false,
  right: false
};

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': input.up = true; break;
    case 'ArrowDown': input.down = true; break;
    case 'ArrowLeft': input.left = true; break;
    case 'ArrowRight': input.right = true; break;
  }
});

document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowUp': input.up = false; break;
    case 'ArrowDown': input.down = false; break;
    case 'ArrowLeft': input.left = false; break;
    case 'ArrowRight': input.right = false; break;
  }
});

gameLoop();
