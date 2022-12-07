let fecha = document.querySelector('#fecha-realizacion');
let newDate = new Date(fecha.innerText).toISOString().split('T')[0];
fecha.innerText = newDate;