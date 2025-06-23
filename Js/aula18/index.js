function criaPessoa (nome,sobrenome,idade){
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Alysson','Oliveira',27);


const pessoa2 = {
    nome: 'Alysson',
    Sobrenome: 'Oliveira',
    idade: 27,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementeIdade(){
        this.idade ++
    }
};

pessoa2.fala();
pessoa2.incrementeIdade();
pessoa2.fala();
pessoa2.incrementeIdade();
pessoa2.fala();
pessoa2.incrementeIdade();