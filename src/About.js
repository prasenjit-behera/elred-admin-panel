/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditIcon from "@mui/icons-material/Edit";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const About = () => {
  const [record, setRecord] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {});
  return (
    <div className="col-md-9">
      <div className="w-100 content-layout">
        <h3>About Us</h3>
        <div className="d-flex p-3">
          <div className="about-logo">
            <img src="images/about-page-logo.png" alt="about logo"></img>
          </div>
          <div className="verify-company ml-4 mt-1">
            <VerifiedIcon style={{ color: "#cccccc" }} />
            <a href="#" className="ml-2">
              Verify Company
            </a>
          </div>
        </div>
        <div className="about-content">
          <div className="edit">
            <a href="#">
              <EditIcon style={{ color: "#e72d38", fontSize: "18px" }} />
            </a>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className="tab-section mt-3">
          <Tabs
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="info" title="Info">
              <div className="row">
                <div className="col-md-4">
                  <div className="card info-card">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img src="images/contact.png" alt="contact"></img>
                          <span className="ml-2">Contact</span>
                        </h6>
                        <div className="float-right edit-icon">
                          <a href="#" onClick={handleShow}>
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        <span>+5</span>
                        <p>
                          <EmailIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          salesteam@gmail.com
                        </p>
                        <p>
                          <PhoneIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          +91 8511591750 / 8000058214
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card info-card">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img src="images/address.png" alt="address"></img>
                          <span className="ml-2">Address</span>
                        </h6>
                        <div className="float-right edit-icon">
                          <a href="#">
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        Sector 3, A/65, Mancheswar Industrial Estate,
                        Bhubaneswar, Odisha 751010
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card info-card">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img
                            src="images/hour-operation.png"
                            alt="hour-operation"
                          ></img>
                          <span className="ml-2">Hours of operations</span>
                        </h6>
                        <div className="float-right edit-icon">
                          <a href="#">
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        Monday to Friday - 09:00 Am To 06:00 Pm
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="card info-card">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img
                            src="images/social-link.png"
                            alt="social-link"
                          ></img>
                          <span className="ml-2">Social media link</span>
                        </h6>
                        <div className="float-right edit-icon">
                          <a href="#">
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="contact-detail mt-3 d-inline-block">
                        <ul className="social-link">
                          <li>
                            <a href="#">
                              <LanguageIcon
                                style={{ color: "#c4c4c4", fontSize: "30px" }}
                              />
                              <br />
                              Website
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <InstagramIcon
                                style={{ color: "#c4c4c4", fontSize: "30px" }}
                              />
                              <br />
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FacebookOutlinedIcon
                                style={{ color: "#c4c4c4", fontSize: "30px" }}
                              />
                              <br /> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <TwitterIcon
                                style={{ color: "#c4c4c4", fontSize: "30px" }}
                              />{" "}
                              <br />
                              Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="card info-card">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img
                            src="images/statement.png"
                            alt="statement"
                          ></img>
                          <span className="ml-2">Statement</span>
                        </h6>
                        <div className="float-right edit-icon">
                          <a href="#">
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        <span>+2</span>
                        You think it we link it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="faq" title="FAQ">
              FAQ
            </Tab>
            <Tab
              eventKey="complaints-and-feedback"
              title="Complaints and feedback"
            >
              Complaints and feedback
            </Tab>
            <Tab eventKey="privacy-policy" title="Privacy Policy">
              Privacy Policy
            </Tab>
            <Tab eventKey="terms-&-condition" title="Terms & Condition">
              Terms & Condition
            </Tab>
          </Tabs>
        </div>
      </div>
      <Modal show={show} className="in right" onHide={handleClose} backdrop="static"
        keyboard={false}>
         
        <Modal.Body>
          <div>
          <h5><ArrowBackRoundedIcon/> <strong>Contacts</strong></h5>
          <p className="modal-caption">Please provide the company email & contacts</p>
          </div>
          
          <div className="card info-card mb-3">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img src="images/contact.png" alt="contact"></img>
                          <span className="ml-2">Sales team</span>
                        </h6>
                        <div className="float-right edit-icon">
                        <a href="#" className="mr-2">
                          <DeleteIcon  style={{ color: "#e72d38", fontSize: "18px" }}/>
                          </a>
                          <a href="#" onClick={handleShow}>
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                          
                         
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        <p>
                          <EmailIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          salesteam@gmail.com
                        </p>
                        <p>
                          <PhoneIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          +91 8511591750 / 8000058214
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card info-card mb-3">
                    <div className="card-body">
                      <div className="d-full-width">
                        <h6 className="float-left card-title">
                          <img src="images/contact.png" alt="contact"></img>
                          <span className="ml-2">Marketing team</span>
                        </h6>
                        <div className="float-right edit-icon">
                        <a href="#" className="mr-2">
                          <DeleteIcon  style={{ color: "#e72d38", fontSize: "18px" }}/>
                          </a>
                          <a href="#" onClick={handleShow}>
                            <EditIcon
                              style={{ color: "#e72d38", fontSize: "18px" }}
                            />
                          </a>
                          
                         
                        </div>
                      </div>
                      <div className="contact-detail mt-2 d-inline-block">
                        <p>
                          <EmailIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          salesteam@gmail.com
                        </p>
                        <p>
                          <PhoneIcon
                            style={{ color: "#dadada", fontSize: "18px" }}
                          />{" "}
                          +91 8511591750 / 8000058214
                        </p>
                      </div>
                    </div> 
                  </div>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="danger btn-block" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default About;
