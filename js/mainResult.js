let dateUntil = document.getElementById('data__ot');
let dateFrom = document.getElementById('data__do');

let acsesImpres = document.getElementById('acses__impres');
let vanKabImpresse = document.getElementById('vann__kabin__impres');
let furniture = document.getElementById('furnitur');
let rocaVann = document.getElementById('vann__roc');
let viega = document.getElementById('vieg');
let instalationImprese = document.getElementById('insta__impres');
let rocaCeram = document.getElementById('ceram__roc');
let impreseCeram = document.getElementById('ceram__impres');
let impreseSmes = document.getElementById('smes__impres');
let hansgroheSmes = document.getElementById('smes__hans');
let rozzySmes = document.getElementById('smes__rozz');

let allResult = document.getElementById('all__result');

function printResult() {
    dateUntil.textContent = localStorage.getItem('dateUntil');
    dateFrom.textContent = localStorage.getItem('dateFrom');

    let numacsesImpres = (localStorage.getItem('acsesImpres')-(localStorage.getItem('acsesImpres')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');
    
    let numvanKabImpresse = (localStorage.getItem('vanKabImpresse')-(localStorage.getItem('vanKabImpresse')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numfurniture = (localStorage.getItem('furniture')-(localStorage.getItem('furniture')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numrocaVann = (localStorage.getItem('roca__van')-(localStorage.getItem('roca__van')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numviega = (localStorage.getItem('viega')-(localStorage.getItem('viega')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numinstalationImprese = (localStorage.getItem('imprese__insta')-(localStorage.getItem('imprese__insta')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numrocaCeram = (localStorage.getItem('roca__ceram')-(localStorage.getItem('roca__ceram')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numimpreseCeram = (localStorage.getItem('imprese__ceram')-(localStorage.getItem('imprese__ceram')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numimpreseSmes = (localStorage.getItem('imprese__smes')-(localStorage.getItem('imprese__smes')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numhansgroheSmes = (localStorage.getItem('hansgrohe__smes')-(localStorage.getItem('hansgrohe__smes')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    let numrozzySmes = (localStorage.getItem('rozzy__smes')-(localStorage.getItem('rozzy__smes')/100*localStorage.getItem('dataPersent')))/localStorage.getItem('dataCursDollar');

    acsesImpres.textContent = numacsesImpres;
    vanKabImpresse.textContent = numvanKabImpresse;
    furniture.textContent = numfurniture;
    rocaVann.textContent = numrocaVann;
    viega.textContent = numviega;
    instalationImprese.textContent = numinstalationImprese;
    rocaCeram.textContent = numrocaCeram;
    impreseCeram.textContent = numimpreseCeram;
    impreseSmes.textContent = numimpreseSmes;
    hansgroheSmes.textContent = numhansgroheSmes;
    rozzySmes.textContent = numrozzySmes;


    allResult.textContent = numacsesImpres + numvanKabImpresse + numfurniture + numrocaVann + numviega + numinstalationImprese + numrocaCeram + numimpreseCeram + numimpreseSmes + numhansgroheSmes + numrozzySmes;
    
}

printResult()