const { buildSchema } = require("graphql");

// contacts in database
const contacts = [
  {
    id: 1,
    firstname: "Harry",
    surname: "Porter",
    mobile: "07048394755",
    phone: "08089567322",
    address: "6 sterling street, NY",
    website: "www.harryporter.com",
    email: "harryp@gmail.com",
    status: "available"
  },
  {
    id: 2,
    firstname: "Bob",
    surname: "Marley",
    mobile: "08034578478",
    phone: "08039567895",
    address: "3 marley way, Ohio",
    website: "www.bobmarley.com",
    email: "marley@gmail.com",
    status: "blocked"
  }
];


// GraphQl schema
const schema = buildSchema(`
  type query {
    getContacts(): Contacts
    getContact(id: Int!): Contact
  }

  type Contact {
    id: Int
    firstname: String!
    surname: String
    mobile: String!
    phone: String
    address: String
    website: String
    email: String
    status: String
  }
`);






module.exports = { schema, contacts }