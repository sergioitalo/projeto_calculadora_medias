const formulario = document.getElementById('formulario')
let linhas = ''
let atividades = []
let notas = []
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))


formulario.addEventListener('submit', function(e) {
  e.preventDefault()

  adicionarLinha()
  inserirNaTabela()
  inserirMediaFinal()
})

function adicionarLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade')
  const inputNotaAtividade = document.getElementById('nota-atividade')
  const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>'
  const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>'

  if(atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
  } else {

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))
  
    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'
  
    linhas += linha
  
  }


  inputNomeAtividade.value = ''
  inputNotaAtividade.value = ''

}

function inserirNaTabela() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}

function calculaMedia() {
  let soma = 0
  for (i of notas) {
    soma += + i
  }

  return soma / atividades.length
  
}

function inserirMediaFinal() {
  const mediaFinal = calculaMedia()
  const mediaTabela = document.getElementById('resultado-media')
  const resultadoTabela = document.getElementById('resultado-final')
  const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
  const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
  mediaTabela.innerHTML = mediaFinal
  resultadoTabela.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
  

}


