import cors from "./cors.js"
import token from "./token.js"

const a2h2 = document.getElementById('a2h2')
const botaoM = document.getElementById('botaoM')

async function obterNotes() {
  let url = `https://justcors.com/${cors()}/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token()}`

  try {
    const resposta = await fetch(url)
    if (!resposta.ok) {
      throw Error('Erro if try!')
    }
    const respostaJson = await resposta.json()
    return respostaJson
  } catch (error) {
    throw Error(`Erro catch! ${error}`)
  }

}
// console.log(obterNotes())

const dadosFazenda = obterNotes()
.then((dados) => {
  if (dados.error) {
    throw Error('Erro if!')
  }
  // renderizarFazenda(dados)
})
.catch((error) => {
  console.log(error)
})

async function obterTalhoes() {
  let url = `https://justcors.com/${cors()}/https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token()}`

  try {
    const resposta = await fetch(url)
    if (!resposta.ok) {
      throw Error('Erro if try!')
    }
    const respostaJson = await resposta.json()
    return respostaJson
  } catch (error) {
    throw Error(`Erro catch! ${error}`)
  }

}
// console.log(obterTalhoes())

const dadosTalhoes = obterTalhoes()
.then((dados) => {
  if (dados.error) {
    throw Error('Erro if!')
  }
  renderizarTalhoes(dados)
})
.catch((error) => {
  console.log(error)
})


async function renderizarTalhoes(dados) {
  const results = dados.results
  const ns = await obterNotes()
  // console.log(results)
  const notes = ns.results
  // console.log(notes)
  if (results.length !== 0) {
    for (let i = 0; i < results.length; i++) {
      let idTalhao = results[i].id
      let indexTalhao = i
      // console.log(idTalhao)
      const talhao = `<section class="pc1" id="p${idTalhao}">
        <div class="pi">
          <h3>${results[i].name}<span class="c">${results[i].cycle}º ciclo</span></h3>
          <p>GL 171 IPRO - 222,13 Ha</p>
          <div class="s">${results[i].state}</div>
        </div>
        <div class="pd">
          <div class="dldd">
            <div class="dl">
              <label for="ddp" id="ddp">Data do Plantio</label>
              <label for="e" id="e">Emergência</label>
              <label for="c" id="c">Colheita</label>
            </div>
            <div class="dd">
              <p>${results[i].date.split('-').reverse().join('/')}</p>
              <p>${results[i].emergence_prediction_date.split('-').reverse().join('/')}</p>
              <p>${results[i].harvest_prediction_date.split('-').reverse().join('/')}</p>
            </div>
          </div>
          <div class="pb"><i onclick="mostrar(${idTalhao})" ${i === 0 ? `class="fa-solid fa-angle-down"` : `class="fa-solid fa-angle-up"`} id="i${idTalhao}"></i></div>
        </div>
      </section>`
      a2h2.insertAdjacentHTML('afterend', talhao)
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].location_type === 'Plantation' && notes[i].location.id === idTalhao) {
          const notaTalhao = `<section class="c3" id="n${idTalhao}" ${indexTalhao === 0 ? `style="display:none"` : ``}>
            <h3><i class="fa-solid fa-pencil"></i>Anotações</h3>
            <div class="imagens">
              ${notes[i].attachments.images.length !== 0 ? `${notes[i].attachments.images.map((e) => {
                return `<img src="${e.thumb_url}" alt="">`
              })}` : ``}
            </div>
            <p>${notes[i].description}</p>
          </section>`
          let talhao = document.getElementById(`p${idTalhao}`)
          talhao.insertAdjacentHTML('afterend', notaTalhao)
        }
      }
    }
  }
}
