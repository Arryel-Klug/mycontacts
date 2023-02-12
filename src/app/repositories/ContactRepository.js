const { uuid } = require('uuidv4');

const contacts = [
  {

    id: uuid(),
    name: 'Titias',
    email: 'titias@gmail.com',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {

  }
}

module.exports = new ContactsRepository();
