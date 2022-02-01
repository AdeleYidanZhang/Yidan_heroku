function Panel() {
    this.create()
    this.bind()
}

Panel.prototype.create = function () {
    

    let container = document.createElement('div')
    let html = `
        <header>Translation<span class="close">X</span></header>
  <main>
    <div class="source">
      <div class="title">Word(s)</div>
      <div class="content"></div>
    </div>
    <div class="dest">
      <div class="title">Meaning</div>
      <div class="content">...</div>
    </div>
  </main>
    `

    container.innerHTML = html
    container.classList.add('translate-panel')
    document.body.appendChild(container)
    this.container = container
    this.close = container.querySelector('.close')
    this.source = container.querySelector('.source .content')
    this.dest = container.querySelector('.dest .content')
}

Panel.prototype.show = function () {
    this.container.classList.add('show')
}

Panel.prototype.hide = function () {
    this.container.classList.remove('show')
}


Panel.prototype.bind = function () {
    this.close.onclick = () => {
        this.hide()
    }
}


Panel.prototype.translate = function (raw) {
    this.source.innerText = raw
    this.dest.innerText = '...'

    let slValue = 'auto'
    let tlValue = 'en'
    // })
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${slValue}&tl=${tlValue}&dt=t&q=${raw}`)
            .then(res => res.json()) 
            .then(res => {
                this.dest.innerText = res[0][0][0]
            })
}

Panel.prototype.pos = function (pos) {
    this.container.style.top = pos.y + 'px'
    this.container.style.left = pos.x + 'px'
}

let panel = new Panel()
window.onmouseup = function (e) {
    let raw = window.getSelection().toString().trim()
    let x = e.pageX
    let y = e.pageY

    if (!raw) {
        return
    } else {
        panel.pos({x: x, y: y})
        panel.translate(raw)
        panel.show()
    }
}