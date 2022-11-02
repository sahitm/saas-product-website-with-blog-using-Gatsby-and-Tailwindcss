import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <>
      <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
        <div className="xl:w-1/2 w-11/12">
          <h1
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            {data.mdx.frontmatter.title}
          </h1>
          <h2
            className="text-base leading-normal text-center text-gray-600 mt-5"
          >
            
          </h2>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`

// function MyApp() {
//     return (

//     );
// }

// export default MyApp;
