const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  data?.allMdx?.nodes?.forEach(node => {
    const url = node.slug.toLowerCase()
    console.log(url)
    actions.createPage({
      path: url,
      component: path.resolve('./src/components/ItemPage/ItemPage.js'),
      context: { url }
    })
  })
}