import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const ThanksForSubscribing = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you subscription"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <p>Thank you for subscribing. Please check your email for confirmation</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Lets go back to Homepage</Link>
    </div>

  </Layout>
)

export default ThanksForSubscribing