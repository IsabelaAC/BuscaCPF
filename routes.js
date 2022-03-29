const baseHandler = require('../../common/baseHandler');
const buscaCPF = require('./controllers/buscaCPF');

module.exports.buscaCPF = baseHandler(buscaCPF);
