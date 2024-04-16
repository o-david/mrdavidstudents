import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div id="foot1">
          <img src={Logo} alt="" /> <h1>Know the Blocks Maven</h1>
          <p>
            We build educational hub where young adults with special needs can
            have access to information and education about the Blockchain
            Ecosystem.
          </p>
          <span>
            <IoLogoInstagram />
          </span>
          <span>
            <IoLogoYoutube />
          </span>
          <span>
            <IoLogoFacebook />
          </span>
          <span>
            <IoLogoTwitter />
          </span>
          <span>
            <IoLogoLinkedin />
          </span>
        </div>
        <div id="foot2">
          <div className="foot-grp">
            <h1>KBM</h1>
            <p>About</p>
            <p>Contact Us</p>
            <p>Patners</p>
            <p>Team</p>
            <p>Sponsor</p>
          </div>
          <div className="foot-grp">
            <h1>DISCOVER</h1>
            <p>Events</p>
            <p>Mentors</p>
            <p>Community</p>
            <p>Courses</p>
          </div>
          <div className="foot-grp">
            <h1>RESOURCES</h1>
            <p>Blog</p>
            <p>Blockchain</p>
          </div>
          <div className="foot-grp">
            <h1>CONTACT US</h1>
            <p>
              <span>
                <IoIosMail />
              </span>
              info@knowtheblocksmaven.com.ng
            </p>

            <p>
              <span>
                <FaPhoneAlt />
              </span>
              +234-703-5081-460
            </p>
            <p>
              <span>
                <MdLocationOn />
              </span>
              1, Lokota Street, Wuse Zone 4, Abuja.
            </p>
          </div>
        </div>
      </div>
      <div id="copyright">
        © All rights reserved. KBM. Powered by Know the Blocks Maven
      </div>
    </footer>
  )
}

export default Footer