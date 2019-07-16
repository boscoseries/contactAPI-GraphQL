const { contacts } = require('../models/db')

const getAll = () => {
  const allContacts = contacts.filter(contact => contact.status !== "blocked");
  if (allContacts.length) {
    return allContacts
  };
}

const root = {
  getContacts: getAll,
};

module.exports = root;