export function formatNumber(numero){
    return new Intl.NumberFormat('es-ES').format(numero);
}