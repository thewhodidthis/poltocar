export default function poltocar(theta = 0, r = 1) {
  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta)
  };
}

