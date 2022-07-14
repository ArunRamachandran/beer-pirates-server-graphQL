import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import BeerData from './test_data.js';

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const data = BeerData;

const typeDefs = `
type BeerData {
    id: String!
    name: String!
    brand: String!
    product_image_index: Int!
    brewery_type: String!
    category: String!
    product_tags: String!
    product_price: String!
    product_currency: String!
    product_desc: String!
    street: String!
    address_2: String!
    address_3: String!
    city: String!
    state: String!
    county_province: String!
    postal_code: String!
    country: String!
    phone: String!
    website_url: String!
    updated_at: String!
    created_at: String!
}

type Query {
    beerRecommendations: [BeerData]
}`

// Resolver for warriors
const resolvers = {
    Query: {
        beerRecommendations: (obj, args, context) => context.beerRecommendations,
    },
}
  
const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    '/graphql',
    graphqlHTTP({
      schema: executableSchema,
      context: data,
      graphiql: true,
    })
)

// app.get('/', (request, response) => {
//   response.send(BeerData)
// })

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})