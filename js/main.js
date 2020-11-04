let dateUntil = document.getElementById('date__until');
let dateFrom = document.getElementById('date__from');

let dataPersent = document.getElementById('persent');
let dataCursDollar = document.getElementById('curs__dollar');

let acsesImpres = document.getElementById('imprese__acs');
let vanKabImpresse = document.getElementById('imprese__van__cab');
let furniture = document.getElementById('imprese__furniture');
let rocaVann = document.getElementById('roca__van');
let viega = document.getElementById('viega');
let instalationImprese = document.getElementById('imprese__insta');
let rocaCeram = document.getElementById('roca__ceram');
let impreseCeram = document.getElementById('imprese__ceram');
let impreseSmes = document.getElementById('imprese__smes');
let hansgroheSmes = document.getElementById('hansgrohe__smes');
let rozzySmes = document.getElementById('rozzy__smes');

let buttonCalck = document.getElementById('calck');


buttonCalck.addEventListener('click', valueFromLoclStore);
async function valueFromLoclStore () {
 await localStorage.setItem('dateUntil', dateUntil.value);
 await localStorage.setItem('dateFrom', dateFrom.value);
 await localStorage.setItem('dataPersent', dataPersent.value);
 await localStorage.setItem('dataCursDollar', dataCursDollar.value);
 await localStorage.setItem('acsesImpres', acsesImpres.value);
 await localStorage.setItem('vanKabImpresse', vanKabImpresse.value);
 await localStorage.setItem('furniture', furniture.value);
 await localStorage.setItem('roca__van', roca__van.value);
 await localStorage.setItem('viega', viega.value);
 await localStorage.setItem('imprese__insta', imprese__insta.value);
 await localStorage.setItem('roca__ceram', roca__ceram.value);
 await localStorage.setItem('imprese__ceram', imprese__ceram.value);
 await localStorage.setItem('imprese__smes', imprese__smes.value);
 await localStorage.setItem('hansgrohe__smes', hansgrohe__smes.value);
 await localStorage.setItem('rozzy__smes', rozzy__smes.value);
}
