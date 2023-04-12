/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StorefrontIcon from '@mui/icons-material/Storefront';
const Sidebar = () => {
    return (
         <div className="col-md-3" id="sidebar" role="navigation">
            <ul className="nav flex-column sticky-top pl-0 p-3">
                <li className="nav-item-logo"><a className="nav-link text-secondary" href="#"><img src="images/sidebar-logo.png" alt="sidebar logo"></img></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><DashboardIcon/> <span className="ml-3">Dashboard</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><StorefrontIcon/> <span className="ml-3">Orders</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><GroupIcon/><span className="ml-3">Team Members</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><HandshakeIcon/><span className="ml-3">Partners</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fa fa-cubes cube"></i> <span className="ml-3">Product Listing</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><EmojiEventsIcon/> <span className="ml-3">Awards and Honours</span></a></li>
                <li className="nav-item mb-2 active"><a className="nav-link text-secondary" href="#"><FeedbackIcon style={{ color: "#be212a" }}/> <span className="ml-3">About Us</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><PaymentsIcon/><span className="ml-3">Payment Info</span></a></li>
                <li className='need-help-section text-center mt-5'>
                    <img src="/images/help.png" alt="help"></img>
                <h6>Need Help?</h6>
                <p>Our support team is at your disposal</p>
                <button className='need-help' type="button">Get help</button>
                </li>
            </ul>
       </div>
    )
}
 
export default Sidebar