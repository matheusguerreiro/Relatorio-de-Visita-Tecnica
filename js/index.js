import { renderAside } from "./aside.js";
import { renderFarmNotes } from "./anotacoesFazenda.js";
import { renderPlantations } from "./eventosTalhoes.js";

async function load() {
  await renderAside()
  await renderFarmNotes()
  await renderPlantations()

  carregando.style.display = 'none'
  body.style.overflow = "visible"
  html.style.overflow = 'visible'
  document.documentElement.scrollTop = 0
}
load()