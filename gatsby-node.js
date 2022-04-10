const fs = require("fs")
const yaml = require("js-yaml")

exports.createPages = ({ actions }) => {

  const { createPage } = actions
  const ymlDoc = yaml.load(fs.readFileSync(".src/dat/vehicles.yaml", "utf-8"))
  ymlDoc.forEach(element => {
    createPage({
      bodytype: element.bodytype,
      component: require.resolve("./src/components/ContentSlider.js"),
      context: {
        vehicle: element.vehicle
      },
    })
  })
}






exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
