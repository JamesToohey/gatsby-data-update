import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

const ALL_PAGES = graphql`
    query {
        allSitePage {
            edges {
                node {
                    path
                    pageContext
                }
            }
        }
    }
`;

const IndexPage = () => {
  const data = useStaticQuery(ALL_PAGES);
  return (
    <>
      <p>Home</p>
      <nav>{data.allSitePage.edges.map((edge, i) => {
        if (edge.node.pageContext?.name) {
          return (
            <>
              <Link key={i} to={edge.node.path}>{edge.node.pageContext?.name} - Price: {edge.node.pageContext?.data}</Link>
              <br />
            </>
          )
        }
      })}</nav>
    </>
  )
}

export default IndexPage

