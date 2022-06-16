// IDS Inputs
const idCategoria = document.getElementById("idCategoria");
const categoria = document.getElementById("categoria");

// IDS Botões
const inserir = document.getElementById("inserir");
const deletar = document.getElementById("deletar");

// IDS Tabela
const tabelaTr = document.getElementById("tabelaTr");

// IDS Mensagem 
const mensagem = document.getElementById("mensagem");
const mensagemTexto = document.getElementById("mensagemTexto");
const mensagemdeletar = document.getElementById("mensagemDeletar");
const mensagemTextoDelete = document.getElementById("mensagemTextoDelete");
const mensagemNaoAchada = document.getElementById("mensagemNaoAchada");

// Objeto com Vetor
let db_cadastro = {
    data: []
}

// BOTAÕ INSERIR
inserir.addEventListener("click", () => {
    cadastrarCategoria();
})

function cadastrarCategoria() {
    if(idCategoria.value != "" && categoria.value !== "") { // Verifica se os Inputs não estão Vazios
        let novaCategoria =  { // Cadastra a Categoria
            id: idCategoria.value,
            categoria: categoria.value
        };

        db_cadastro.data.push(novaCategoria); // Adiciona ela a última posição do Vetor do Objeto

        localStorage.setItem('db_Categorias', JSON.stringify(db_cadastro)); // Manda para o localStorage

        idCategoria.value = ""; // Após Cadastrar os campus do input ficam vazios
        categoria.value = ""; // Após Cadastrar os campus do input ficam vazios

        mensagem.style.display = "none"; // Mensagem dos campos não preenchidos ficam como none
        mensagemdeletar.style.display = "none"; // Mensagem caso não tenha nenhum item no vetor ficam como none
        mensagemNaoAchada.style.display = "none";  // Mensagem caso não tenha achado o item no vetor ficam como none

        montarTabela(); // Função para Montar a Tabela
    }
    else {
        displayMensagem(); // Função para mostrar a Mensagem caso os campus dos inputs estejam vazios
    }
}

// Função caso os Inputs estjeam vazios 
function displayMensagem() {
    mensagem.style.display = "block";
    mensagemTexto.textContent = "Preencha Todos os Campos"
}

// Função para Montar a tabela
function montarTabela() {
    let testeTabela = "";

    for(let j=0; j<db_cadastro.data.length; j++) { // Pecorre todo o Vetor do Objeto Preenchendo
        testeTabela += `<tr>
        <td>${j+1}</td>
        <td>${db_cadastro.data[j].id}</td>
        <td>${db_cadastro.data[j].categoria}</td>
        </tr>`
    }

    tabelaTr.innerHTML = testeTabela;
}

// BOTÃO DELETAR
deletar.addEventListener("click", () => {
    deletarCategoria();
})

function deletarCategoria() {
    if(idCategoria.value != "" && categoria.value !== "") { // Verifica se os Inputs não estão Vazios
        if(db_cadastro.data.length > 0) { // Se no vetor tiver pelo menos um Item
            for(let i=0; i<db_cadastro.data.length; i++) {
                if(idCategoria.value == db_cadastro.data[i].id && categoria.value == db_cadastro.data[i].categoria) { // Se o que for digitado nos inputs tem no vetor
                    db_cadastro.data.splice(i, 1); // Excluí o índice específico do vetor 
                    mensagemNaoAchada.style.display = "none";  // Mensagem caso não tenha achado o item no vetor ficam como none
                }
                else {
                    mensagemNaoAchada.style.display = "block";
                    mensagemNaoAchada.textContent = "Categoria não Encontrada";
                }
            }
    
            localStorage.setItem('db_Categorias', JSON.stringify(db_cadastro));  // Manda para o localStorage
            
            idCategoria.value = ""; // Após Cadastrar os campus do input ficam vazios
            categoria.value = ""; // Após Cadastrar os campus do input ficam vazios
            
            mensagem.style.display = "none"; // Mensagem dos campos não preenchidos ficam como none
 
            montarTabela(); // Função para Montar a Tabela
        }
        else { // Se no Vetor não tiver nenhum item 
            mensagem.style.display = "none"
            mensagemdeletar.style.display = "block";
            mensagemTextoDelete.textContent = "Nenhum Item para Deletar"
        }
    }
    else {
        displayMensagem(); // Função para mostrar a Mensagem caso os campus dos inputs estejam vazios
    }  
}