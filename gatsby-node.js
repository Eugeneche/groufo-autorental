const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 
  const { data } = await graphql(`
  query getPageInfo {
    allMdx(filter: {slug: {ne: "categories"}}) {
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

  const categories = await graphql(`
    query getCategories {
      mdx(slug: {eq: "categories"}) {
        frontmatter {
          categories
        }
      }
    }
  `)

  //console.log(data) 

  data?.allMdx?.nodes?.forEach(mdxNode => {

    /* data?.allFile?.nodes?.forEach(fileNode => { */
      const categoryUrl = mdxNode.frontmatter.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
      const endUrl = mdxNode.slug.toLowerCase().split('/')[mdxNode.slug.toLowerCase().split('/').length - 1]
      const slug = mdxNode.slug
      //let relPath, imageData
      
      
/*       if(fileNode.relativePath === mdxNode.frontmatter.relPath) {
        relPath = fileNode.relativePath
        imageData = fileNode.childImageSharp.gatsbyImageData
      } */

      actions.createPage({
        path: `${categoryUrl}/${endUrl}`,
        //path: endUrl,
        component: path.resolve('./src/components/ItemPage/ItemPage.js'),
        context: { slug/* , relPath, imageData  */}
      })
    /* }) */
  })
console.log(categories)
  categories.data.mdx.frontmatter.categories.forEach(category => {

    const categoryUrl = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
    const categoryName = category
    actions.createPage({
        path: categoryUrl,
        component: path.resolve('./src/components/CategoryPage/CategoryPage.js'),
        context: { categoryName }
      })
  })
  
}