import cors from "./cors.js"
import token from "./token.js"

// const article = document.getElementById('article')
const a1h2 = document.getElementById('a1h2')

async function obterFazenda() {
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
// console.log(obterFazenda())

const dadosFazenda = obterFazenda()
.then((dados) => {
  if (dados.error) {
    throw Error('Erro if!')
  }
  renderizarFazenda(dados)
})
.catch((error) => {
  console.log(error)
})

function renderizarFazenda(dados) {
  const results = dados.results
  for (let i = 0; i < results.length; i++) {
    let index = i
    if (results[i].location_type === 'Farm') {
      // console.log(index)
      const section = document.createElement('section')
        section.classList.add('c1')
          const h3 = document.createElement('h3')
            const i = document.createElement('i')  
              i.className = "fa-solid fa-pencil"
            h3.appendChild(i)
              i.after('Anotações')
        section.appendChild(h3)
      if (results[index].attachments.images.length !== 0) {
        // console.log('TEM IMG', index)
        let images = results[index].attachments.images
        const div = document.createElement('div')
          div.classList.add('imagens')
        for (let i2 = 0; i2 < images.length; i2++) {
          // console.log('IMG AQUI')
          const img = document.createElement('img')
          img.src = images[i2].thumb_url
          div.appendChild(img)
        }
        section.appendChild(div)
      }
          const p = document.createElement('p')
          console.log()
          p.textContent = results[index].description
        section.appendChild(p)
      a1h2.after(section)
    }
  }
}
