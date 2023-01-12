import * as React from "react"
import { Link } from "gatsby";

const Page = (props) => {
  return (
    <>
      <h1>{props.pageContext.name}</h1>
      <p>This product is on sale for: {props.pageContext.data}</p>
      <Link to="/">Home</Link>
    </>
  )
}

export default Page
