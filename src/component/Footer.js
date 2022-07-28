import React from "react"
import logo1 from "./pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img' id="footerprofileimage" style={{ margin: 'auto' }}>
            <img style={{ width: "100px", borderRadius: "50%" }} src={logo1} alt='' />
          </div>
          <p>© 2021. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
