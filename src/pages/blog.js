import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
          {data.allFile.edges.filter(edge => {
            const markdown = /.mdx/;
            if (edge.node.relativePath.search(markdown) !== -1){
                return true;
            }
            return false;
          }).map(markdownEdge => {
            return (
            <li key={markdownEdge.relativePath}>
                {markdownEdge.node.name}
            </li>
        )})}
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        name
        dir
        relativeDirectory
        relativePath
      }
    }
  }
}
`

export default BlogPage