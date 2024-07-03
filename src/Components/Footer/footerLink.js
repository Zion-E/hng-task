import React from 'react'
import "./footerLink.css"

const footerLink = () => {
  return (
    <div className='footer'>
        <div data-test-id = "hngLink" className='footer-hnglink'>
            Click here to visit the learning page of HNG
            <a href="http://hng.tech/learn" className="text-link">
                hng.tech/learn
            </a>
        </div>
        <div data-test-id = "keywordLink" className='footer-keywordlink'>
            Visit the keyword link page
            <a href="http://keyword.dog" className="text-link">
                keyword.dog
            </a>
        </div>
        <div data-test-id = "scrapeanywebLink" className='footer-scrapelink'>
            Check out this website
            <a href="http://scrapeanyweb.site" className="text-link">
                Scrapeanyweb.site
            </a>
            
        </div>
    </div>
  )
}

export default footerLink