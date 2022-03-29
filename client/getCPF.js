const schema = require('./schema.json');

module.exports.getCPF = (cpf) => schema.dados.filter((user) => user.cpf === cpf)[0];
