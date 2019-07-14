function avaliarEmprestimo(idade, qtdEmprestimo, salario, parcelas){
    if((idade>=22 ) && (idade<=55) && (qtdEmprestimo >= 1000) && (qtdEmprestimo < salario * 15)){
        
        if ((parcelas >= 3 ) && (parcelas <= 20)){
            let vpar = qtdEmprestimo/parcelas;
            let juros = vpar*(0.01);
            let vemprestimo = 0;
            console.log('Emprestimo aprovado');
            for(i=1;i<=parcelas;i++){
                vpar = juros+vpar;
                console.log('O valor da parcela '+i+' é '+vpar.toFixed(2)+'R$');
                vemprestimo = vemprestimo+vpar;
                juros = vpar*(0.01);
            }
            vemprestimo = vemprestimo.toFixed(2);
            return `O valor total a ser pago é ${vemprestimo}R$`;
        }
        else{
            return("numero de parcelas inválidas")
        }
    }
    else{

        return("Emprestimo Negado")
    }
}
