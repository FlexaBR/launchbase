/* ==========================================================

  OPERADORES DE COMPARAÇÃO

  > Maior
  < Menor
  >= Maior igual a
  <= Menor igual a
  == Igual a
  === Igual e do mesmo tipo
  != Diferente de
  !== Diferente, inclusive do tipo

  =========================================================== */

  // DESAFIO 1
  const idade = 17
  // Verificar se a pessoa é maior de 18 anos
  // se sim, deixar entrar, se não, bloquear a entrada

  if(idade >= 18) {
    console.log('Deixar entrar')
  } else {
    console.log('Bloquer a entrada')
  }

  // se a pessoa tiver 17 anos
  // avisar para voltar quando fizer 18 anos
  if(idade == 17) {
    console.log('Volte quando fizer 18 anos')
  }

/* ==========================================================

    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiras para que a
        condição final seja verdadeira.

    ||  "OU" Uma das duas condições devem ser verdadeiras para que
        a condição final seja verdadeira.

    !   "NÃO" Nega uma condição.
    
  =========================================================== */

  console.log(5 == 5 && 6 == 6) // true
  console.log(5 == 5 && 6 != 6) // false

  console.log(5 != 5 && 6 == 6) // true
  console.log(5 == 5 && 6 != 6) // true

  console.log(!(5 > 6)) // true
  console.log(!(5 < 6)) // false

  
/* ==========================================================

    OPERADORES ARITMÉTICOS

    * Multiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração

  =========================================================== */