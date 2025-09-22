const $=(sel) => document.querySelector(sel)
const $$ = (sel) => Array.from(document.querySelectorAll(sel))

const form = $("#form")
const input = $("#tarefa")
const erro = $("#erro")
const lista = $("#lista")
const tpl = $("#tplitem")
const btnLimpatConcluidas = $("#btnLimparConcluidas")

const contTotal = $("#contTotal")
const countDone = $("#contDone")

const filtros = $$("#.btn-filtro")
let filtroAtual = "todas";

//(opcinal) Persistência
const persistToggle = $("#persist")
const LS_KEY ="todo_basico_v1"

function getTarefas() {
    return $$("#lista.item").map(li =>({
        texto: li.querySelector(".texto").textContent,
        done:liclassList.contains("concluida")
    }));
}

function setErro(msg){erro.textContent+msg||"";}

function atualizarContadores(){
    const todos = getTarefas();
    const done = todos.filter (t => t.done).length;
    countTotal.textContent = todos.length
    countDon.textContent = done;
}

function criarItem(texto, done=false){
    const node =tpl.content.cloneNode(true);
    const li = node.querySelector("li");
    const span= node.querySelector(".texto");
    const chk = node.querySelector(".chk")
    span.textContent= texto;
    chk.checked = !!done;
    if (done) li.classList.add("concluida")
    lista.appendChild(node);
    aplicarFiltro();
    atualizarContadores();
    salvarSeAtivo();
}

function aplicarFiltro(){
    const items = $$("#lista .itrm");
    items.forEach(li => {
        const done
    })
}