import { farm, farm2, notes, plantations } from "./urls.js"

//  USAR async await ASSIM - sem o export dataFarm e sem usar o .then
// DEPOIS É SÓ CHAMAR, NESSE CASO NO aside.js linha 3 e correr pro abraço!
export async function getFarm() {
  let url = farm
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw Error('Erro no try getFarm() !')
    }
    let rJson = await response.json()
    return rJson
  } catch (error) {
    console.log(error)
  }
}
// export const dataFarm = await getFarm()
//   .then((data) => {
//     if (data.error) {
//       throw Error('Erro no .then getFarm() !')
//     }
//     return data
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// E NÃO USAR ASSIM COM .then
async function getFarm2() {
  let url = farm2
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw Error('Erro no try getFarm2() !')
    }
    let rJson = await response.json()
    return rJson
  } catch (error) {
    console.log(error)
  }
}
export const dataFarm2 = await getFarm2()
  .then((data) => {
    if (data.error) {
      throw Error('Erro no .then getFarm2() !')
    }
    return data
  })
  .catch((error) => {
    console.log(error)
  })

async function getPlantations() {
  let url = plantations
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw Error('Erro no try getPlantations() !')
    }
    let rJson = await response.json()
    return rJson
  } catch (error) {
    console.log(error)
  }
}
export const dataPlantations = await getPlantations()
  .then((data) => {
    if (data.error) {
      throw Error('Erro no .then getPlantations() !')
    }
    return data
  })
  .catch((error) => {
    console.log(error)
  })  

async function getNotes() {
  let url = notes
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw Error('Erro no try getNotes() !')
    }
    let rJson = await response.json()
    return rJson
  } catch (error) {
    console.log(error)
  }
}
export const dataNotes = await getNotes()
  .then((data) => {
    if (data.error) {
      throw Error('Erro no .then getNotes() !')
    }
    return data
  })
  .catch((error) => {
    console.log(error)
  })
