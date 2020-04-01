import React from "react"
import { Link, graphql } from "gatsby"


const BlogPage = ({data}) => {
  return (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(item => (
        <div key={item.node.id}>
            <h3>{item.node.frontmatter.title}</h3>
            <small>Posted by {item.node.frontmatter.author}</small>
            <br />
            <br />
            <Link to={item.node.frontmatter.path}>Read more</Link>
        </div>
    ))}
  </div>
  )
};

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
            node {
                id
                frontmatter {
                title
                author
                date
                path
                }
                excerpt
            }
            }
        }  
    }
`;

export default BlogPage
/*
    {data.allMarkdownRemark.edges.map(item => (
        <div key={item.node.id}>
            <h3>{item.frontmatter.title}</h3>
        </div>
    ))}
*/ 