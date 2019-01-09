const moment = require('moment');
moment.locale('pt-br');
let dia = moment().format('dddd');
document.getElementById('dia').innerHTML = 'O dia é' + dia + 'ola';