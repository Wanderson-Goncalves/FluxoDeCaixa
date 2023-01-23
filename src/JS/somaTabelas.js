

function soma(categoria) {
    let total = 0;
    $(`#${categoria} tbody td`).each(function () {
        total += parseFloat($(this).text());
    });

     $(`#${categoria} tfoot td`).text(total);

    resultado();

}

function resultado() {
  

    balancoFinal = $("#balancoFinal");

    totalEntrada = $("#entrada tfoot td").text();
    totalContasFixas = parseFloat($("#contasFixas tfoot td").text());
    totalContasVariaveis = parseFloat($("#contasVariaveis tfoot td").text());
   
     let resultadoFinal = totalEntrada - (totalContasFixas + totalContasVariaveis);
    balancoFinal.text(resultadoFinal);

    return balancoFinal;




}









