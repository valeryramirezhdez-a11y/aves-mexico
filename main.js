import './style.css'
import { aves } from './data.js'

const app = document.querySelector('#app')

function renderHome() {
  app.innerHTML = `
    <div class="fade-in">
      <header class="hero">
        <h1>Guacamayas, Cotorros y Pericos de México</h1>
        <p>Descubre las coloridas aves que habitan los bosques y selvas de México. Conoce dónde viven, si están en peligro de extinción y un dato curioso sobre cada una.</p>
      </header>

      <h2 class="section-title">Conoce las especies</h2>

      <div class="aves-grid">
        ${aves.map(ave => `
          <article class="ave-card">
            <img src="${ave.foto}" alt="${ave.nombre}" loading="lazy" />
            <div class="card-body">
              <span class="tipo">${ave.tipo}</span>
              <h3>${ave.nombre}</h3>
              <span class="badge ${ave.endangerment === 'En peligro de extinción' ? 'badge-peligro' : 'badge-amenazada'}">${ave.endangerment}</span>
              <button data-id="${ave.id}">Conoce más</button>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `

  app.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => renderDetail(btn.dataset.id))
  })
}

function renderDetail(id) {
  const ave = aves.find(a => a.id === id)
  if (!ave) {
    renderHome()
    return
  }

  app.innerHTML = `
    <div class="fade-in">
      <div class="back-bar">
        <button class="secondary" id="btn-back">← Atrás</button>
      </div>

      <article class="detail">
        <img class="detail-img" src="${ave.foto}" alt="${ave.nombre}" />
        <div class="detail-info">
          <h2>${ave.nombre}</h2>
          <p class="ciencia">${ave.nombreCientifico}</p>

          <div class="status-row">
            <span class="badge ${ave.endangerment === 'En peligro de extinción' ? 'badge-peligro' : 'badge-amenazada'}">${ave.endangerment}</span>
          </div>

          <div class="info-block">
            <span class="info-label">¿Dónde se encuentra?</span>
            ${ave.region}
          </div>

          <div class="info-block">
            <span class="info-label">Hábitat</span>
            ${ave.habitat}
          </div>

          <div class="info-block">
            <span class="info-label">Tamaño</span>
            ${ave.tamano}
          </div>

          <div class="info-block">
            <span class="info-label">Esperanza de vida</span>
            ${ave.esperanzaVida}
          </div>

          <div class="info-block">
            <span class="info-label">Alimentación</span>
            ${ave.alimentacion}
          </div>

          <div class="info-block">
            <span class="info-label">Estado de conservación</span>
            ${ave.endangermentDetalle}
          </div>

          <div class="curioso-box">
            <span class="info-label">Dato curioso</span>
            ${ave.curioso}
          </div>
        </div>
      </article>
    </div>
  `

  document.querySelector('#btn-back').addEventListener('click', renderHome)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

renderHome()
