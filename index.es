const poltocar = (t = 0, r = 1) => ({
  x: r * Math.cos(t),
  y: r * Math.sin(t)
});

export default poltocar;
