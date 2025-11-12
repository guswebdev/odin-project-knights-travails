export const knightMoves = (inicio, fin) => {
  const queue = [{ position: inicio, path: [inicio] }];

  const visited = new Set();

  const movimientos = [
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1],
    [+1, +2],
    [+1, -2],
    [-1, +2],
    [-1, -2],
  ];

  const inicioX = inicio[0];
  const inicioY = inicio[1];
  const finX = fin[0];
  const finY = fin[1];

  if (
    inicioX > 7 ||
    inicioX < 0 ||
    inicioY > 7 ||
    inicioY < 0 ||
    finX > 7 ||
    finX < 0 ||
    finY > 7 ||
    finY < 0
  ) {
    throw new Error(
      "Las posiciones deben estar comprendidas entre 0 y 7, ambos inclusive."
    );
  }

  while (queue.length > 0) {
    const currentPosition = queue[0].position;
    const currentPath = queue[0].path;

    // Comprueba si hemos llegado a la posición final.
    if (String(currentPosition) === String(fin)) return currentPath;

    // Explora todos los movimientos posibles del caballo desde la posición actual.
    for (const [dx, dy] of movimientos) {
      const newX = currentPosition[0] + dx;
      const newY = currentPosition[1] + dy;

      // Comprueba si la nueva posición está dentro de los límites.
      if (newX > 7 || newX < 0) continue;

      if (newY > 7 || newY < 0) continue;

      // Comprueba si ya se ha visitado la nueva posición.
      if (visited.has(String([newX, newY]))) continue;

      // Añadir la nueva posición a la cola y marcarla como visitada.
      visited.add(String([newX, newY]));
      queue.push({
        position: [newX, newY],
        path: [...currentPath, [newX, newY]],
      });
    }

    queue.shift();
  }
};
