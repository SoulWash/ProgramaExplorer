const students = [
    {
        name: "João David",
        firstResult: 6.4,
        secondResult: 4.8
    },
    {
        name: "Juliana Moraes",
        firstResult: 9.1,
        secondResult: 7.5
    },
    {
        name:"Carmila Noronha",
        firstResult: 7.5,
        secondResult: 6.4
    },
    {
        name: "Gabriel Santos",
        firstResult: 3.5,
        secondResult: 2.3
    }
]

for(student of students){
    let stundetName = student.name;
    let stundetFR = Number(student.firstResult);
    let stundetSR = Number(student.secondResult);

    function media(){
        return ((stundetFR + stundetSR) / 2).toFixed(1);
    }

    let approved = media() > 6;

    if(approved){
        alert(`A média do(a) aluno(a) ${stundetName} é: ${media()}\nParabéns, ${stundetName}! Você foi aprovado(a) no concurso!`)  
    } else {
        alert(`A média do(a) aluno(a) ${stundetName} é: ${media()}\nNão foi dessa vez, ${stundetName}! Tente novamente`)
    }
}


