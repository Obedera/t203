// let idade = Number(prompt('Digite sua Idade'));
// let qtdEmprestimo = Number(prompt('Digite o valor desejado de emprestimo'));
// let salario = Number(prompt('Digite seu salario'));

function avaliarEmprestimo(idade, qtdEmprestimo, salario, parcelas){

    if((idade>=22 ) && (idade<=55) && (qtdEmprestimo >= 1000) && (qtdEmprestimo < salario * 15)){
        console.log('Deu certo') 
        if ((parcelas >= 3 ) && (parcelas <= 20)){
            // let montante;
            // montante=qtdEmprestimo*((1+0.08)**parcelas);
            // montante = montante.toFixed(2);
            // let par = montante / parcelas;
            // par = par.toFixed(2);
            // console.log(`O valor total do empréstimo é de ${montante} e o valor da parcela é de ${parcelas}`)
            let par = qtdEmprestimo/parcelas;
            let juros;
            for(let i=1; i<parcelas;i++){
                juros = (1+(0.08*par))**i;
                console.log(par+juros);
                // let rec = (par+(0.08*par));
                // console.log(par);

                // rec += rec;
            }
        }

        else if (idade < 22)   {
            return("numero de parcelas inválidas")
        }
        
        
    }
    
    else if (idade < 22)   {

        return("idade inválida")
    }
        
}
