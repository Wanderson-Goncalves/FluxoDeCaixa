
/* Soma os Valores da tabela*/

function soma(categoria) {
    let total = 0;
    $(`#${categoria} tbody td`).each(function () {
        let valor = $(this).text().replace(/[R$]/g, "");
        total += parseFloat(valor.replace(",","."));
    });

    $(`#${categoria} tfoot td`).text(` ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    resultado();

}


/* Função que calcula balanço final */

function resultado() {  

    let totalEntrada = $("#entrada tfoot td").text() == ""? 0 : $("#entrada tfoot td").text().replace(/[R$]/g, "");
    let totalContasFixas = $("#contasFixas tfoot td").text() == "" ? 0 : $("#contasFixas tfoot td").text().replace(/[R$]/g, "");
    let totalContasVariaveis = $("#contasVariaveis tfoot td").text() == "" ? 0 : $("#contasVariaveis tfoot td").text().replace(/[R$]/g, "");

    let resultadoFinal = passandoParaFloat(totalEntrada) - (passandoParaFloat(totalContasFixas) + passandoParaFloat(totalContasVariaveis));

    $("#balancoFinal").text(` ${resultadoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`); 

}

/* Função que passa string para float */

function passandoParaFloat(valor) {

     let numero = valor == 0 ?  valor : parseFloat(valor.replace(",", ".")) 

    return numero;

}








