;(function () {
  const savedTheme = localStorage.getItem('theme')
  document.documentElement.classList.add(savedTheme || 'light')
})()

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const next = current === 'dark' ? 'light' : 'dark'
  document.documentElement.classList.remove(current)
  document.documentElement.classList.add(next)
  localStorage.setItem('theme', next)
}

fetch('./partials/header.html')
  .then((res) => {
    if (!res.ok) throw new Error('File non trovato')
    return res.text()
  })
  .catch(() => {
    // Prova percorso alternativo
    return fetch('../partials/header.html').then((res) => {
      if (!res.ok) throw new Error('File non trovato nel percorso alternativo')
      return res.text()
    })
  })
  .then((html) => {
    document.getElementById('header').innerHTML = html
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme)
  })
  .catch((err) => {
    console.error('Errore nel caricamento dell’header:', err)
  })
