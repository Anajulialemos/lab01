function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) 
    if (numero % divisor == 0) return false;
    return true;
}
for (let i = 2; i < 1000; i++) if (numeroPrimo(i))
 console.log(i);
