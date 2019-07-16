const express = require('express');
const express_graphql = require('express-graphql')

// import GraphQL schema from models
const { schema } = require('./models/db');
// import root resolver from controllers
const root = require('./controller/contact');
// set port address
const port = process.env.PORT || 4000

const app = express()
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`GraphQL server running on port ${port}/grahpql`)
})