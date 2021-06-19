import React from 'react'
import { Header, Footer, Content } from './index'
// import { Content } from './Content'
// import { Footer } from './Footer'

const Layout = () => {

    return (
      <div className="c-app c-default-layout">
        <div className="c-wrapper">
          <Header/>
          <div>
            <Content/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
  
  export default Layout
  