const { serverError, ok } = require('../../../../common/httpResponse');

const { getCPF } = require('../../client/getCPF');
const formatCPF = require('./functions/formatCPF');

const handle = async (event) => {
  try {
    const { cpf } = event.queryStringParameters;

    if (!cpf) {
      return serverError(
        'HTTPError: CPF inexistente',
      );
    }

    const response = getCPF(cpf);

    if (!response?.id) {
      return serverError(
        'HTTPError: Cpf não cadastrado',
      );
    }

    const editedCpf = formatCPF(response);

    return ok(editedCpf);
  } catch (err) {
    return serverError(err.message);
  }
};

module.exports = handle;
