function parimp(n) { //criei a funcao pra saber se o numero e par ou impar
    if(n % 2 == 0) { //se o numero dividido por 2 sobrar 0 ele e par
        return "par"
    } else {
        return "impar" //se nao e impar
    }
}

console.log(parimp(4))