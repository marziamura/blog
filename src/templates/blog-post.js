/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import Layout from "../components/layout";
import SEO from '../components/seo';

import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({

 box:{
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 40,
    maxWidth: "100%",
  }, 
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: '100%',
  }

}));

const styles = {
  'article blockquote': {
    'background-color': 'cardBg'
  },
  pagination: {
    'a': {
      color: 'muted',
      '&.is-active': {
        color: 'text'
      },
      '&:hover': {
        color: 'text'
      }
    }
  }
}

const Pagination = (props) => (
  <div 
    className="pagination -post"
    sx={styles.pagination}
  >
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'blog-post') && (
          <li>
              <Link to={props.previous.frontmatter.slug} rel="prev">
                <p
                  sx={{
                    color: 'muted'
                  }}
                >
                  <span className="icon -left"><RiArrowLeftLine/></span> Previous</p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
              </Link>
          </li>
        )}
        {(props.next && props.next.frontmatter.template === 'blog-post') && (
          <li>
            <Link to={props.next.frontmatter.slug} rel="next">
              <p
                sx={{
                  color: 'muted'
                }}
              >Next <span className="icon -right"><RiArrowRightLine/></span></p>
              <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
          </li>
        )}
    </ul>
  </div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  const classes = useStyles();
  const { previous, next } = pageContext

  let props = {
    previous,
    next
  }

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />

      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
   

        </header>
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {(previous || next) && (
        <Pagination {...props} />
      )}

    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 500, quality: 80) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
              fixed(width: 450, height: 500) {
          ...GatsbyImageSharpFixed
        }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`