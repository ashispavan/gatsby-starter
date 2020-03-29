import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

const IndexPage = () => (
  <div>
    <h1>Welcome!</h1>
    <p>This is a sample site made from Gatsby starter template</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">About</Link>
  </div>
)

export default IndexPage
