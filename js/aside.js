import { dataFarm, dataFarm2, dataPlantations } from "./gets.js"

let nomeFazenda = document.getElementById('nomeFazenda').innerText = dataFarm.farm.name
let dataVisita = document.getElementById('dataVisita').innerText = dataFarm.details.date.split('-').reverse().join('/')
let safra = document.getElementById('safra').innerText = dataFarm.harvest.name
let usuario = document.getElementById('usuario').innerText = dataFarm.owner.name
let iniciais = document.getElementById('iniciais').innerText = dataFarm.owner.initials
let observacoes = document.getElementById('observacoes').innerText = dataFarm.details.observation
let pluviometria = document.getElementById('pluviometria').innerHTML += `${dataFarm2.rain_until_date} mm`
let quantidadeTalhoes = document.getElementById('quantidadeTalhoes').innerHTML = `${dataPlantations.results.length} talhões` 
