const path = require("path");

const myPages = [
  { name: "Page 1", path: "/page-1/", dataThatChangesEveryBuild: "$500" },
  { name: "Page 2", path: "/page-2/", dataThatChangesEveryBuild: "$600" },
]

module.exports = {
  createPages: ({
    actions,
  }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve("./src/template/page.js");

    myPages.forEach((page) => {
      createPage({
        path: page.path,
        component: pageTemplate,
        context: {
          name: page.name,
          data: page.dataThatChangesEveryBuild,
        },
      });
    });
  }
}
