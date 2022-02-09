/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";
import Theme from "../components/theme"

import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({children, className, props}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  console.log(resetCookieConsentValue());
  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <Navigation/>
        <div sx={layoutStyle.theme}>
          <Theme/>
        </div>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
      <CookieConsent
          location="bottom"
          buttonText="I am fine with cookies"
          declineButtonText="Decline"
        
          overlay
          cookieName="mixPanelCookie">
                I know you hate this banner, I hate it too, but I have to ask :(
                I am only using cookies to count the visits to my blog. No ads, I promise.
   
      </CookieConsent>
    </div>
  )
}

export default Layout

const layoutStyle = {
  theme: {
    display:["none", "none", "none", "block"],
  }
}