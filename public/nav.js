for (let item of document.querySelectorAll('.nav > nav ul li b')) {
  item.addEventListener('click', function click(e) {
    e.target.nextSibling.classList.toggle('hide')
  })
}

let defaults = [
  '/intro', 
  '/quickstart', 
  '/primitives',
]

let current = window.location.pathname.replace('/production', '')
let isDefault = defaults.some(i=> current.startsWith(i))

if (isDefault || current === '/') {
  document.getElementById('guides').nextSibling.classList.toggle('hide') 
  document.getElementById('ref').nextSibling.classList.toggle('hide') 
}
else {
  document.getElementById('intro').nextSibling.classList.toggle('hide') 
  document.getElementById('quickstart').nextSibling.classList.toggle('hide') 
  document.getElementById('primitives').nextSibling.classList.toggle('hide') 
}
