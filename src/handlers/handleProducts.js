// Función para cambiar la imagen al pasar el ratón por encima
export function changeImg(e, newSrc) {
    e.target.src = newSrc;
}

// Función para restaurar la imagen original al quitar el ratón
export function resetImg(e, originalSrc) {
    e.target.src = originalSrc;
}