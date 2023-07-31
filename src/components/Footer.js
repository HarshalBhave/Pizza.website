import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../Styles/Footer.css";



function Footer() {
  return (
    <div className="footer" >
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <YouTubeIcon />
                
        </div>
      <p>&copy;2023 Pizza.com
      </p>
    </div>
  )
}

export default Footer
