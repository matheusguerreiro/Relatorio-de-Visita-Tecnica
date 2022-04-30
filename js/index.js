import { renderAside } from "./aside.js";
import { renderFarmNotes } from "./anotacoesFazenda.js";
import { renderPlantations } from "./eventosTalhoes.js";


function renderMaster() {
  renderAside()
  renderFarmNotes()
  renderPlantations()
}
renderMaster()