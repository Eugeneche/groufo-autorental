const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 
  const { data } = await graphql(`
    query getPageInfo {
      allMdx {
        nodes {
          slug
          id
          frontmatter {
            relPath
            price
            name
            airConditioner
            bodyStyle
            category
            seats
            transmission
            year
          }
        }
      }
      allFile(filter: {extension: {eq: "jpg"}, sourceInstanceName: {eq: "vehicles"}}) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  //console.log(data)

  data?.allMdx?.nodes?.forEach(mdxNode => {

    /* data?.allFile?.nodes?.forEach(fileNode => { */

      const url = mdxNode.slug.toLowerCase().split('/')[mdxNode.slug.toLowerCase().split('/').length - 1]
      const slug = mdxNode.slug
      //let relPath, imageData
      
      
/*       if(fileNode.relativePath === mdxNode.frontmatter.relPath) {
        relPath = fileNode.relativePath
        imageData = fileNode.childImageSharp.gatsbyImageData
      } */

      actions.createPage({
        path: url,
        component: path.resolve('./src/components/ItemPage/ItemPage.js'),
        context: { slug/* , relPath, imageData  */}
      })
    /* }) */
  })
}