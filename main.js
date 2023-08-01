function cachorro(raca) {
    this.raca = raca;
}

function Vacinas(vacinado) {
    this.vacinado = vacinado;
}
function nomes(raca, idade, sexo, name, vacinado) {
    this.idade = idade;
    this.sexo = sexo;
    this.name = name

    cachorro.call(this, raca);
    Vacinas.call(this, vacinado);
}



function Lili(raca) {
    nomes.call(this, raca, 2, "femea", "Lili", "vacinado");


    console.log(this.name + " sabe sentar");
    }

function Ben(raca) {
    nomes.call(this, raca, 7, "macho", "Ben", "vacinado");

    console.log(this.name + " sabe rolar");
}

function Thunder(raca) {
    nomes.call(this, raca, 1, "macho", "Thunder", "vacinado");

    console.log(this.name + " sabe dar a patinha");
}

function Sofia(raca) {
    nomes.call(this, raca, 3, "femea", "Sofia", "vacinado");

    console.log(this.name + " sabe fingir de morto");
}


const cachorro1 = new Lili("Poddle", "vacinada");
const cachorro2 = new Ben("Golden Retrivier", "vacinado");
const cachorro3 = new Thunder("Dalmata", "vacinado");
const cachorro4 = new Sofia("York", "vacinada");


console.log(cachorro1);
console.log(cachorro2);
console.log(cachorro3);
console.log(cachorro4);