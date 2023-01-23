
const botoes = $('.btn__adicionar');


botoes.on('click',inserirDispesa);

function inserirDispesa(event) {
    event.preventDefault();
    
    let categoria = event.target.value;
    let tabela = $("#" + categoria).find("tbody");
    inserirConta(tabela);   
    soma(categoria);
    
    

}

function inserirConta(tabela) {

    let corpoTabela = tabela;
    let nomeDespesa = $("#nomeDespesa").val();
    let valorDespesa = $("#valorDespesa").val();    

    let linha = novaLinha(nomeDespesa, valorDespesa);
    corpoTabela.prepend(linha);

    // nomeDespesa = $("#nomeDespesa").val("");
    // valorDespesa = $("#valorDespesa").val("");
    
}

function novaLinha(nomeConta, valorConta) {

    let linha = $("<tr>");
    const colunaNomeConta = $("<th>").text(nomeConta);
    const colunaValorConta = $("<td>").text(valorConta);

    linha.append(colunaNomeConta);
    linha.append(colunaValorConta);

    return linha;
}

