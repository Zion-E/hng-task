import React from 'react'
import UTCtime from './timeDisplay'
import DayOfWeek from './DayOfWeek'
import slackProfilePic from './image/slackprofilepic.jpg'
import './HeaderSlackDetails.css'

const HeaderSlackDetails = () => {
  return (
    <div className='slack_detail'>

        <div className='personal_detail'>
          <div data-test-id="slackDisplayName">
            <h3>Mayowa Akinsanmi</h3>
          </div>
          <div data-test-id="slackEmail" className="slackmail">
            <h4>idowuakinsanmi599@gmail.com</h4>
          </div>
        </div>

        <div data-test-id="currentTimeUTC" className='personal_detail'>
            <h3>
              <UTCtime/>
            </h3>
        </div>
        <div data-test-id="currentDay" className='personal_detail'>
          <h3>
            <DayOfWeek/>
          </h3>
        </div>
        <div data-test-id="slackProfilePicture" className='personal_detail'>
          <img src={slackProfilePic} alt="profilepicture"
          className='profile_pic'/>
        </div>
    </div>
  )
}

export default HeaderSlackDetails