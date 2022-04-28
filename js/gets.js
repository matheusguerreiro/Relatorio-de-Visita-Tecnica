import { farm, farm2, plantations } from "./urls.js"

async function getFarm() {
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
export const dataFarm = await getFarm()
  .then((data) => {
    if (data.error) {
      throw Error('Erro no .then getFarm() !')
    }
    return data
  })
  .catch((error) => {
    console.log(error)
  })

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




