function calcular () {

    // pesquisa os elementos de entrada e saida no documento HTML

    let quantia = document.getElementById("quantia");
    let _juros = document.getElementById("_juros");
    let anos = document.getElementById("anos");
    let cep = document.getElementById("cep");

    let pagamento_mensalidade = document.getElementById("pagamento_mensalidade");
    let pagamento_total = document.getElementById("pagamento_total");
    let juros_total = document.getElementById("juros_total");

    let principal_quantia = parseFloat(quantia.value);
    let juros = parseFloat(_juros.value) / 100 / 12;
    let pagamentos = parseFloat(anos.value) * 12;

    let x = Math.pow(1 + juros, pagamentos);
    let mensal = (principal_quantia * x * juros) / (x - 1);

    if (isFinite(mensal)) {
        pagamento_mensalidade.innerHTML = mensal.toFixed(2);
        pagamento_total.innerHTML = (mensal * pagamentos).toFixed(2);
        juros_total.innerHTML = ((mensal * pagamentos) - principal_quantia).toFixed(2);
        save(quantia.value, _juros.value, anos.value, cep.value);

        // função anuncio de credoras

        try {
        
        } catch (error) {}

        // função grafico

    } else {

        pagamento_total.innerHTML = "";
        pagamento_mensalidade = "";
        juros_total = "";

        // função grafico
    }
}


function salvar (quantia, _juros, anos, cep) {
    if (window.localStorage) {
        localStorage.loan_quantia = quantia;
        localStorage.loan_juros = _juros;
        localStorage.loan_anos = anos;
        localStorage.loan_cep = cep;
    }
}

window.onload = function () {
    if (window.localStorage && localStorage.loan_quantia) {
        document.getElementById("quantia").value = localStorage.loan_quantia;
        document.getElementById("_juros").value = localStorage.loan_juros;
        document.getElementById("anos").value = localStorage.loan_anos;
        document.getElementById("cep").value = localStorage.loan_cep;
    }
};


function getCredoras() {
    if(!window.XMLHttpRequest) return;
}