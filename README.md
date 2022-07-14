Getting started with the Server. 

## Available scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in local server. 
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the graphiQL IDE. 

## Sample query

### `
{
    beerRecommendations {
      id
      category
      name
      brand
      product_image_index
      brewery_type
      product_tags
      product_price
      product_currency
      product_desc
      country
      phone
      updated_at
      created_at
    }
}
`
