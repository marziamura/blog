/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import mixpanel from 'mixpanel-browser';
import {useEffect} from "react";
import {getCookieConsentValue} from "react-cookie-consent";

mixpanel.init('3380d410a52c988f320b17a80c70c676', {debug: true}); 
export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  useEffect(()=>{
      if(getCookieConsentValue("mixPanelCookie")==="true") {
     
       mixpanel.track("home page" + frontmatter.title);
    }
  }, [])

	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 class="title">{frontmatter.title}</h1>
          <p 
            class="tagline"
            sx={{
              color: 'muted'
            }}
          >
            {frontmatter.tagline}
          </p>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <Link 
            to={frontmatter.cta.ctaLink} 
            className="button"
            sx={{
              variant: 'links.button'
            }}
          >
            {frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine/></span>
          </Link>
        </div>
        <div>
          {Image ? (
            <Img 
              fluid={Image} 
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
        </div>
      </div>
      <div>
      <p 
            class="tagline"
            sx={{
              color: 'muted'
            }}
          >
        Spending many years working in men dominated enviroments has definetely had a big impact in my career, but also on my personality.

        So this is the space where I will be sharing some of my stories and my thoughts. I hope you'll find them interesting.
        
    </p>
      </div>  
      <BlogListHome/>
		</Layout>
	)
}

export default HomePage
