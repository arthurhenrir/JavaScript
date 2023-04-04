function funcao(parametro) {
    return `aaaa`;
};

const funcao2 = function(parametro) {
    return `aaaa ${parametro}`;
};

const funcao3 = (parametro) => {
    return `aaaa ${parametro}`;
};

const funcao4 = (parametro) => `aaaaa ${parametro}`;

const obj1 = {
    funcao5: (parametro) => `aaaa ${parametro}`
};

obj1.funcao5('teste');

const obj2 = { minhaFuncao (parametro) {
        return `aeee ${parametro}`
    }
}

obj2.minhaFuncao(parametro);