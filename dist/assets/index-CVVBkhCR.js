(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const l=[{id:"guacamaya-roja",nombre:"Guacamaya Roja",nombreCientifico:"Ara macao",tipo:"Guacamaya",foto:"https://images.pexels.com/photos/14943143/pexels-photo-14943143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Selvas tropicales del sureste de México: Chiapas, Oaxaca, Tabasco y Veracruz.",habitat:"Habita en selvas húmedas y bosques tropicales cerca de ríos.",endangerment:"Amenazada",endangermentDetalle:"Sujeta a Protección Especial (NOM-059-SEMARNAT-2010). Su población ha disminuido por la deforestación y el tráfico ilegal de mascotas.",curioso:"Pueden imitar sonidos y voces humanas, y se emparejan de por vida: si uno muere, el otro puede quedar solo el resto de su vida.",tamano:"81 a 96 cm de largo",esperanzaVida:"40 a 50 años en libertad",alimentacion:"Frutas, semillas, nueces y néctar."},{id:"guacamaya-verde",nombre:"Guacamaya Verde",nombreCientifico:"Ara militaris",tipo:"Guacamaya",foto:"https://images.pexels.com/photos/40301239/pexels-photo-40301239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Bosques de la Sierra Madre Occidental y Oriental, en estados como Jalisco, Nayarit, San Luis Potosí y Chiapas.",habitat:"Bosques tropicales y subtropicales, frecuentemente en zonas montañosas.",endangerment:"En peligro de extinción",endangermentDetalle:"En Peligro de Extinción (NOM-059-SEMARNAT-2010). Pérdida de hábitat y captura ilegal son sus principales amenazas.",curioso:"Anidan en grietas de acantilados y paredones rocosos, algo poco común entre las guacamayas.",tamano:"70 a 80 cm de largo",esperanzaVida:"50 a 60 años",alimentacion:"Frutas, semillas, flores y hojas."},{id:"guacamaya-amarilla",nombre:"Guacamaya Azul-Amarilla",nombreCientifico:"Ara ararauna",tipo:"Guacamaya",foto:"https://images.pexels.com/photos/4964589/pexels-photo-4964589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Selvas del sur de México, en regiones de Tabasco, Campeche y Quintana Roo.",habitat:"Selvas tropicales, sabanas y bosques de galería cerca de ríos.",endangerment:"Amenazada",endangermentDetalle:"Sujeta a Protección Especial (NOM-059-SEMARNAT-2010). Tráfico de mascotas y pérdida de hábitat amenazan sus poblaciones.",curioso:"Su pico es tan fuerte que puede romper nueces de coco y semillas muy duras que otras aves no podrían abrir.",tamano:"76 a 86 cm de largo",esperanzaVida:"30 a 50 años",alimentacion:"Frutas, semillas, nueces y frutos secos."},{id:"perico-cabeza-amarilla",nombre:"Perico Cabeza Amarilla",nombreCientifico:"Amazona oratrix",tipo:"Perico",foto:"https://images.pexels.com/photos/40272018/pexels-photo-40272018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Vertiente del Pacífico y Golfo de México: Sinaloa, Jalisco, Veracruz, Tabasco y Yucatán.",habitat:"Bosques tropicales caducifolios y manglares.",endangerment:"En peligro de extinción",endangermentDetalle:"En Peligro de Extinción (NOM-059-SEMARNAT-2010). Una de las aves más capturadas como mascota, lo que ha reducido drásticamente sus poblaciones.",curioso:"Es considerada una de las aves parlantes más inteligentes del mundo: puede aprender cientos de palabras y asociarlas con su significado.",tamano:"35 a 38 cm de largo",esperanzaVida:"40 a 60 años",alimentacion:"Frutas, semillas, flores y brotes de plantas."},{id:"cotorro-corona-roja",nombre:"Cotorro Corona Roja",nombreCientifico:"Amazona viridigenalis",tipo:"Cotorro",foto:"https://images.pexels.com/photos/30330919/pexels-photo-30330919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Noreste de México: Tamaulipas, San Luis Potosí y norte de Veracruz.",habitat:"Bosques subtropicales y matorrales espinosos.",endangerment:"En peligro de extinción",endangermentDetalle:"En Peligro de Extinción (NOM-059-SEMARNAT-2010). La captura para el comercio de mascotas es su principal amenaza.",curioso:"Forman grandes bandos ruidosos al atardecer, y se comunican con gritos que pueden escucharse a kilómetros de distancia.",tamano:"28 a 33 cm de largo",esperanzaVida:"30 a 50 años",alimentacion:"Semillas, frutos, flores y néctar."},{id:"cotorro-pico-grueso",nombre:"Cotorro Pico Grueso",nombreCientifico:"Rhynchopsitta pachyrhyncha",tipo:"Cotorro",foto:"https://images.pexels.com/photos/14002385/pexels-photo-14002385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",region:"Sierra Madre Occidental: Chihuahua, Durango, Sinaloa y Nayarit.",habitat:"Bosques de coníferas y pinos en zonas montañosas.",endangerment:"En peligro de extinción",endangermentDetalle:"En Peligro de Extinción (NOM-059-SEMARNAT-2010). Es endémica de México y muy sensible a la pérdida de bosques de pino.",curioso:"Es una de las pocas aves del país que migra altitudinalmente: desciende a bosques más bajos en invierno y sube a las montañas en primavera.",tamano:"38 a 43 cm de largo",esperanzaVida:"20 a 30 años",alimentacion:"Semillas de coníferas, piñas, frutos y brotes."}],r=document.querySelector("#app");function t(){r.innerHTML=`
    <div class="fade-in">
      <header class="hero">
        <h1>Guacamayas, Cotorros y Pericos de México</h1>
        <p>Descubre las coloridas aves que habitan los bosques y selvas de México. Conoce dónde viven, si están en peligro de extinción y un dato curioso sobre cada una.</p>
      </header>

      <h2 class="section-title">Conoce las especies</h2>

      <div class="aves-grid">
        ${l.map(o=>`
          <article class="ave-card">
            <img src="${o.foto}" alt="${o.nombre}" loading="lazy" />
            <div class="card-body">
              <span class="tipo">${o.tipo}</span>
              <h3>${o.nombre}</h3>
              <span class="badge ${o.endangerment==="En peligro de extinción"?"badge-peligro":"badge-amenazada"}">${o.endangerment}</span>
              <button data-id="${o.id}">Conoce más</button>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `,r.querySelectorAll("button[data-id]").forEach(o=>{o.addEventListener("click",()=>d(o.dataset.id))})}function d(o){const e=l.find(i=>i.id===o);if(!e){t();return}r.innerHTML=`
    <div class="fade-in">
      <div class="back-bar">
        <button class="secondary" id="btn-back">← Atrás</button>
      </div>

      <article class="detail">
        <img class="detail-img" src="${e.foto}" alt="${e.nombre}" />
        <div class="detail-info">
          <h2>${e.nombre}</h2>
          <p class="ciencia">${e.nombreCientifico}</p>

          <div class="status-row">
            <span class="badge ${e.endangerment==="En peligro de extinción"?"badge-peligro":"badge-amenazada"}">${e.endangerment}</span>
          </div>

          <div class="info-block">
            <span class="info-label">¿Dónde se encuentra?</span>
            ${e.region}
          </div>

          <div class="info-block">
            <span class="info-label">Hábitat</span>
            ${e.habitat}
          </div>

          <div class="info-block">
            <span class="info-label">Tamaño</span>
            ${e.tamano}
          </div>

          <div class="info-block">
            <span class="info-label">Esperanza de vida</span>
            ${e.esperanzaVida}
          </div>

          <div class="info-block">
            <span class="info-label">Alimentación</span>
            ${e.alimentacion}
          </div>

          <div class="info-block">
            <span class="info-label">Estado de conservación</span>
            ${e.endangermentDetalle}
          </div>

          <div class="curioso-box">
            <span class="info-label">Dato curioso</span>
            ${e.curioso}
          </div>
        </div>
      </article>
    </div>
  `,document.querySelector("#btn-back").addEventListener("click",t),window.scrollTo({top:0,behavior:"smooth"})}t();
