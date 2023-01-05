
var btnDispesaFixa = $("#adicionarDispesasFixas");


$(function () {
    inserirDispesaFixa();

});

function inserirDispesaFixa() {
    btnDispesaFixa.click(() => {
        let nomeDespesa = $("#nomeDespesa").val();
        let valorDespesa = $("#valorDespesa").val();

        inserirConta(nomeDespesa, valorDespesa);



        event.preventDefault();


    });

}

function inserirConta(x, y) {
    
    let corpoTabela = $("#contasFixas").find("tbody");

    let nome = x;
    let valor = y;

    let linha = novaLinha(nome, valor);

    corpoTabela.append(linha);
}

function novaLinha(nomeConta, valorConta) {

    let linha = $("<tr>");
    let colunaNomeConta = $("<th>").text(nomeConta);
    let colunaValorConta = $("<td>").text(valorConta);

    linha.append(colunaNomeConta);
    linha.append(colunaValorConta);

    return linha;
}
