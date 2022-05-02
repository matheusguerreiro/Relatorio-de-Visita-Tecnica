import { dataNotes, dataPlantations } from "./gets.js"

// const h2_eT = document.getElementById('a2h2')
// const a_ = document.getElementById('article')

export function renderPlantations() {
  const results = dataPlantations.results
  // console.log(results)
  const notes = dataNotes.results
  // console.log(notes)
  if (results.length !== 0) {
    const h2 = document.createElement('h2')
    h2.id = 'a2h2'
    h2.innerText = 'Eventos dos talhões'
    article.appendChild(h2)
    for (let i = 0; i < results.length; i++) {
      let idTalhao = results[i].id
      let indexTalhao = i
      // console.log(idTalhao)
      const talhao = `<section class="pc1" id="p${idTalhao}">
        <div class="pi">
          <h3>${results[i].name}<span class="c">${results[i].cycle}º ciclo</span></h3>
          <p>${results[i].variety.name} - ${results[i].area} Ha</p>
          <div class="s">${results[i].state === 'active' ? 'Plantado' : '...'}</div>
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
            <h3><i class="fa-solid fa-pencil"></i>Anotações<span>${notes[i].date.slice(11, 16)}</span></h3>
            <div class="imagens">
              ${notes[i].attachments.images.length !== 0 ? `${notes[i].attachments.images.map((e) => {
                return `<img src="${e.thumb_url}">`
              }).join('')}` : ''}
            </div>
            <p>${notes[i].description}</p>
          </section>`
          let talhao = document.getElementById(`p${idTalhao}`)
          talhao.insertAdjacentHTML('afterend', notaTalhao)
        }
      }
    }
  } else {
    const h2 = document.createElement('h2')
    h2.id = 'a2h2'
    h2.innerText = 'Talhões sem eventos'
    article.appendChild(h2)
  }
}
