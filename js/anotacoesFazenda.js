import { dataNotes } from "./gets.js"

const mainContent = document.querySelector('.main-content')

export function renderFarmNotes() {
  const results = dataNotes.results
  if (results.lenght !== 0) {
    const article = document.createElement('article')
    article.classList.add('anotacoes-eventos')
    article.id = 'article'
      const h2 = document.createElement('h2')
      h2.id = 'a1h2'
      h2.innerText = 'Anotações da fazenda'
      article.appendChild(h2)
    mainContent.appendChild(article)
    for (let i = 0; i < results.length; i++) {
      let iFor = i
      if (results[i].location_type === 'Farm') {
        const section = document.createElement('section')
          section.classList.add('c1')
            const h3 = document.createElement('h3')
              const i = document.createElement('i')  
                i.className = "fa-solid fa-pencil"
              const span = document.createElement('span')
                span.innerText = results[iFor].date.slice(11, 16)
              h3.appendChild(i)
                i.after('Anotações')
              h3.appendChild(span)
          section.appendChild(h3)
        if (results[iFor].attachments.images.length !== 0) {
          let images = results[iFor].attachments.images
          const div = document.createElement('div')
            div.classList.add('imagens')
          for (let i = 0; i < images.length; i++) {
            const img = document.createElement('img')
            img.src = images[i].thumb_url
            div.appendChild(img)
          }
          section.appendChild(div)
        }
            const p = document.createElement('p')
            console.log()
            p.innerText = results[iFor].description
          section.appendChild(p)
          a1h2.after(section)
      }
    }
  } else {
    const article = document.createElement('article')
    article.classList.add('anotacoes-eventos')
    article.id = 'article'
    const h2 = document.createElement('h2')
      h2.id = 'a1h2'
      h2.innerText = 'Fazenda sem anotações'
      article.appendChild(h2)
    mainContent.appendChild(article)
  }
}
