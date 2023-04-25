const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const formPages = await graphql(`
    query formPages {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              published
            }
          }
        }
      }
    }
  `);

  if (formPages.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  const createFormPages = formPages.data.allMdx.edges;

  createFormPages.forEach(({ node }, index) => {
    console.log(node);
    if (node.frontmatter.published) {
      createPage({
        path: `/partner/${node.frontmatter.slug}/apply/`,
        component: path.resolve(`./src/components/Pages/ApplyPage.tsx`),
        context: { pageId: node.id },
      });
    }
  });

  // createLandingPages.forEach(({ node }, index) => {
  //   if (node.published) {
  //     createPage({
  //       path: `/${node.slug}/get-funded`,
  //       component: path.resolve(`./src/components/FormPageLayout.js`),
  //       context: { pageId: node.id },
  //     })
  //   }
  // })
};
