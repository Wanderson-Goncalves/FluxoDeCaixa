

function soma(categoria) {
    let total = 0;
    $(`#${categoria} tbody td`).each(function () {
        total += parseFloat($(this).text());
    });

    $(`#${categoria} tfoot td`).text(total);

    resultado();

}

function resultado() {

    let balancoFinal = $("#balancoFinal");

    let totalEntrada = $("#entrada tfoot td").text() == 0 ? 0 : $("#entrada tfoot td").text();
    let totalContasFixas = $("#contasFixas tfoot td").text() == 0 ? 0 : $("#contasFixas tfoot td").text();
    let totalContasVariaveis = $("#contasVariaveis tfoot td").text() == 0 ? 0 : $("#contasVariaveis tfoot td").text();

    let resultadoFinal = parseFloat(totalEntrada) - (parseFloat(totalContasFixas) + parseFloat(totalContasVariaveis));
    balancoFinal.text(resultadoFinal);

}









