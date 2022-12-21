
var btnDispesaFixa = $("#adicionarDispesasFixas");

$(function () {
    inserirDispesaFixa();
    
});

function inserirDispesaFixa() {
    btnDispesaFixa.click(() => {
       
        let nomeDespesa = $("#nomeDespesa").text();
        let valorDespesa = $("#valorDespesa").text();
        let mostra = nomeDespesa;
        console.log(mostra);
        console.log(valorDespesa);
        event.preventDefault();


    });

}