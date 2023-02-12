class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
    // Obter Um registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
