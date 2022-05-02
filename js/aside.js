import { dataFarm, dataFarm2, dataPlantations } from "./gets.js"

let dFdataVisita = dataFarm.details.date.split('-').reverse().join('/')
const mainContent = document.querySelector('.main-content')

document.getElementById('titulo').innerText = `Relatório de visita técnica - ${dFdataVisita}`

export function renderAside() {
  const aside = `<aside class="fazenda">
    <div class="f">
      <label for="f">Fazenda</label>
      <p id="nomeFazenda">${dataFarm.farm.name}</p>
      <p id="quantidadeTalhoes" class="p2">${dataPlantations.results.length} talhões</p>
    </div>
    <hr>
    <div class="ddvsrpup">
      <div class="ddvs">
        <div class="ddv">
          <label for="ddv">Data da visita</label>
          <p id="dataVisita">${dFdataVisita}</p>
        </div>
        <div class="s">
          <label for="s">Safra</label>
          <p id="safra">${dataFarm.harvest.name}</p>
        </div>
      </div>
      <div class="rpup">
        <div class="rp">
          <label for="rp">Realizada por</label>
          <p id="usuario">${dataFarm.owner.name}</p>
        </div>
        <div class="u">
          <p class="p2" id="iniciais">${dataFarm.owner.initials}</p>
        </div>
        <div class="p">
          <label for="p">Pluviometria</label>
          <p id="pluviometria"><i class="fa-solid fa-droplet"></i>${dataFarm2.rain_until_date} mm</p>
          <p class="p3">Acumulado na safra</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="os">
      <label for="os">Observações</label>
      <p class="p2" id="observacoes">${dataFarm.details.observation}</p>
    </div>
    <hr>
    <div class="b">
      <button><i class="fa-solid fa-print"></i>IMPRIMIR</button>
    </div>
  </aside>`
  mainContent.insertAdjacentHTML('afterbegin', aside)
}
