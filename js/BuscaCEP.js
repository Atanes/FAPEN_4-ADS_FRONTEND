
function limpa_formulário_cep() {
    document.getElementById('rua').value = "";
    document.getElementById('complemento').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

function atribuirCampos(data) {

    document.getElementById('rua').value = data.logradouro;
    document.getElementById('complemento').value = data.complemento;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;

}

function pesquisacep() {

    const inputDoCep = document.querySelector("#cep");
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;
    fetch(url).then(response => {
        return response.json();
    })
        .then(data => {
            atribuirCampos(data);
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}