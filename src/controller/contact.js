const { contacts } = require('../models/db')

const getAll = () => {
  const allContacts = contacts.filter(contact => contact.status !== "blocked");
  if (!contacts.length || !allContacts.length) {
    return "No contacts found";
  }
  return validContacts
};

export const getOne = (args) => {
  const contact = contacts.find(contact => contact.id === args.id && contact.status === "available");
  if (!contacts.length || !contact.length) {
    return "No contact found";
  }
  return contact
};




const root = {
  getContacts: getAll,
  getContact: getOne
};

module.exports = root;