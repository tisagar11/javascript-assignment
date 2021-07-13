
const x = document.getElementById('inputId')
      x.addEventListener('input', function(event){
        let convert = event.target.value
        let p = document.getElementById('pId')
        p.innerHTML = convert * 0.72
        let e = document.getElementById('eId')
        e.innerHTML = convert * 0.84
        let c = document.getElementById('cId')
        c.innerHTML = convert * 1.24
        let r = document.getElementById('rId')
        r.innerHTML = convert * 3.72
        let b = document.getElementById('bId')
        b.innerHTML = convert * 84.87
      })