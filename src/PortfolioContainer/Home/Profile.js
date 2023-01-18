import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

function Profile() { 
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                <div className='colz-icon'>
                    <a href='https://en.wikipedia.org/wiki/Facebook'>
                    <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'>
                    <i className="fa-brands fa-square-google-plus"></i>
                    </a>
                    <a href='https://www.instagram.com/accounts/login/'>
                    <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><i className="fa-brands fa-square-twitter"></i></a>
                    <a href='https://www.youtube.com/watch?v=ilw_g_rxtVc&list=PLvdl6DCxUDQ-oVlj5x7YI1MLD4FhrglU_&index=5&t=235s'>
                    <i className="fa-brands fa-square-youtube"></i>
                    </a>
                </div>
                </div>
                <div className='profile-details-name'>
                  <span className='primary-text'>
                    Hello,I'M <span className='highlighted-text'>Ethiedu</span>
                  </span>
                </div>
                <div className='profile-details-role'>
                  <span className='primary-text'>
                    
                    <h1>
                    
                      <Typical
                      loop={Infinity}
                      steps={[
                        "Ethusiastic Dev",
                        1000,
                        "Full Stack Dev",
                        1000,
                        "MERN Stack Dev",
                        1000,
                        "Cross Platform v",
                        1000,
                        "sReact Native Dev",
                        1000,
                      ]} />
                    </h1>
                    <span className='profile-role-tagline'>
                      Knack of building application with front and back end operations
                    </span>
                  </span>
                </div>
                <div className='profile-options'>
                  <button className='btn primary-btn'> Hire Me
                  </button>
                   <a href='RESUME.docx'download="PRAKASH RESUME.docx"> 
                    <button className='btn highlighted-btn'>Get Resume</button>
                   </a> 
                </div>
            </div>
            <div className='profile-picture'>
              <div className='profile-picture-background'>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
