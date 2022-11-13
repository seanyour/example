document.body.appendChild(document.createElement('canvas'));
document.querySelector('style')?.append(`canvas {
    position: fixed;
    left:0;
    top:0;
    z-index:10;
    pointer-events: none;
}`);

const canvas = document.querySelector('canvas');
const ctx = canvas?.getContext('2d');

const point = {
  x: 0,
  y: 0,
  radius: 50,
};

document.onmousemove = event => {
  point.x = event.clientX;
  point.y = event.clientY;
  render();
};

const render = () => {
  canvas!.width = document.documentElement.clientWidth;
  canvas!.height = document.documentElement.clientHeight;
  ctx?.beginPath();
  ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
  const radial = ctx?.createRadialGradient(
    point.x,
    point.y,
    point.radius,
    point.x,
    point.y,
    point.radius * 3
  ) as CanvasGradient;
  radial?.addColorStop(0, 'rgba(255,255,255,0)');
  radial?.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx!.fillStyle = radial;
  ctx?.fillRect(0, 0, canvas!.width, canvas!.height);
};
