// IDS Inputs
const idCategoria = document.getElementById("idCategoria");
const categoria = document.getElementById("categoria");

// IDS Botões
const inserir = document.getElementById("inserir");
const deletar = document.getElementById("deletar");

// IDS Tabela
const tableNum = document.getElementById("tableNum");
const tableID = document.getElementById("tableID");
const tableCategoria = document.getElementById("tableCategoria");
const tabelaTr = document.getElementById("tabelaTr");

let db_cadastro = { // ojdados
    data: [ //usuarios 
        {
            numero: "",
            id: "",
            categoria: ""
        }
    ]
}
// db_castro.data.push()



inserir.addEventListener("click", () => {
    cadastrarCategoria();
})

function cadastrarCategoria() {
    if(idCategoria.value != "" && categoria.value !== "") {
        let num = 1;
        let textoID = idCategoria.value;
        let textoCategoria = categoria.value;

        let novaCategoria =  {
            numero: num,
            id: textoID,
            categoria: textoCategoria
        };

        db_cadastro.data.push(novaCategoria);

        localStorage.setItem("db_Categorias", JSON.stringify(db_cadastro));

        montarTabela();
    }
    else {
        const mensagem = document.getElementById("mensagem");
        const mensagemTexto = document.getElementById("mensagemTexto");

        mensagem.style.display = "block";
        mensagemTexto.textContent = "Preencha Todos os Campos"
    }
}

function montarTabela() {
    let cadastroObjetos = localStorage.getItem("db_Categorias", JSON.parse(db_cadastro))

}