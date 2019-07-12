let filmes = [
    {   titulo:'Harry Potter',
        classificacao:12
    },
    {   titulo:'As branquelas',
        classificacao:16
    },
    {   titulo:'Rei leão',
        classificacao:10
    },
    {   titulo:'Interestelar',
        classificacao:10
    },
    {   titulo:'Ninja Assasino',
        classificacao:18
    },
    {   titulo:'John Wick',
        classificacao:16
    },
    {   titulo:'Velozes e Furiosos',
        classificacao:14},
]

function verFilmes(idadeUser){
    for (let item of filmes){
    if(item.classificacao<=idadeUser){
        console.log(item);
    }
}
}