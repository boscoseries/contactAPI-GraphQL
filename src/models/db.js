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
  },
  {
    id: 3,
    firstname: "Jerry",
    surname: "Peters",
    mobile: "08038904478",
    phone: "07039567895",
    address: "6 peters way, FL",
    website: "www.jerrypeters.com",
    email: "jpeters@gmail.com",
    status: "available"
  }
];


// GraphQl schema
const schema = buildSchema(`
  type Query {
    getContacts: [ Contact ]
    getContact(id: Int!): Contact
  }

  type Contact {
    id: Int
    firstname: String
    surname: String
    mobile: String
    phone: String
    address: String
    website: String
    email: String
    status: String
  }
`);



module.exports = { schema, contacts }


