const produtosEle = document.querySelectorAll('.produtos-info')
const produtosWrap = document.querySelectorAll('.produtos-wrap')

fetch('./produtos.json')
  .then(res => res.json())
  .then(data => {
    produtosEle.forEach((elem, i) => {
      elem.innerHTML += `<p><strong>${data.Produtos[i].nome}</strong></p>
            <a><img src="imgs/product/rate.png" /></a>
            <div>
              <span><strong>R$ ${data.Produtos[i].valor}</strong></span>
              <span><s>R$ ${data.Produtos[i].valorAnterior}<s></span>
            </div>
            <div class="btn-comprar">
              <button>COMPRAR</button>
            </div>`
    })
  })

produtosWrap.forEach((elem, i) => {
  elem.addEventListener('mouseover', e => {
    if (window.innerWidth >= 993) elem.classList.add('hover')
  })

  elem.addEventListener('mouseout', e => {
    if (window.innerWidth >= 993) elem.classList.remove('hover')
  })
})
window.addEventListener('resize', e => {
  if (e.currentTarget.innerWidth <= 992) {
    produtosWrap.forEach((elem, i) => {
      elem.classList.add('hover')
    })
  } else {
    produtosWrap.forEach((elem, i) => {
      elem.classList.remove('hover')
    })
  }
})
