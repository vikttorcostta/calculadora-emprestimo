function buscarCep(){
    
    let cep = document.getElementById("cep").value;
    let resultado = document.getElementById("resultado");
    let api = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
        resultado.innerHTML = `
            <div class="text-md font-medium bg-amber-100 border-2 border-amber-300 p-2 rounded-md w-full" id="resultado">
                <p>CEP: ${data.cep}</p>
                <p>Logradouro: ${data.logradouro}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Estado: ${data.uf}</p>           
            </div>
        `;
    }).catch(error => console.error())
}
