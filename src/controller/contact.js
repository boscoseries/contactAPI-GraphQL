const { contacts } = require('../models/db')

const getAll = () => {
  const allContacts = contacts.filter(contact => contact.status !== "blocked");
  if (allContacts.length) {
    return allContacts
  };
}
const getOne = (args) => {
 return  contacts.find(contact => contact.id === args.id && contact.status === "available");
};


const root = {
  getContacts: getAll,
  getContact: getOne
};

module.exports = root;