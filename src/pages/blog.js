import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

function Blog({ data }) {
  console.log(data)
  const projects = data.allMdx.nodes
  console.log(projects)

  return (
    <Layout>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Latest from our Blog
          </h1>

          <div className="mt-12 lg:mt-24 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  {projects.map(project => (
                    <Link
                      to={"/blog" + project.frontmatter.slug}
                      key={project.id}
                    >
                      <div>
                        <img
                          className="w-full"
                          src={project.frontmatter.image}
                          alt="games"
                        />
                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                          <p className="text-sm text-white font-semibold tracking-wide">
                            {project.frontmatter.authour}
                          </p>
                          <p className="text-sm text-white font-semibold tracking-wide">
                            {project.frontmatter.date}
                          </p>
                        </div>
                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                          <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                            {project.frontmatter.title}
                          </h1>
                          <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                            {project.frontmatter.source}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          authour
          source
          date
          image
        }
        id
      }
    }
    allSite {
      edges {
        node {
          siteMetadata {
            copyright
            description
            title
          }
        }
      }
    }
  }
`



export default Blog
