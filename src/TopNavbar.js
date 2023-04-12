/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const TopNavbar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container fluid={true} className="ml-4 mr-4">
          <Navbar.Brand className="ml-2 mr-2" href="#home">
            <img src="images/company-logo.png" alt="company logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
             <div className="search">
                <i className="fa fa-search"></i>
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="form-control"
                    aria-label="Search"
                  />
              </div>
            <Nav className="me-auto">
             
              <Nav.Link href="#link">
                {" "}
                <button className="btn checkout">
                  <ShoppingCartOutlinedIcon /> Checkout (200)
                </button>
              </Nav.Link>
              <NavDropdown
                title={
                  <div className="topbar-img">
                    <img
                      className="thumbnail-image mr-1"
                      src="/images/profile.png"
                      alt="user pic"
                    />
                    User Admin
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    //         <nav className="navbar navbar-expand-md text-dark bg-white mb-3">
    //             <div className='row w-100'>
    //                 <div className='col-md-3'>
    //                 <div className="flex-row d-flex">
    //                 <button type="button" className="navbar-toggler mr-2" data-toggle="offcanvas" title="Toggle responsive left sidebar">
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>
    //                 <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template"><img src="/images/company-logo.png" alt="company logo"></img></a>
    //             </div>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //                 </div>
    //                 <div className='col-md-9'>
    //                 <div className="navbar-collapse collapse" id="collapsingNavbar">
    //                 <ul className="navbar-nav ml-auto">
    //                     <li className="nav-item">
    //                         <button className='btn checkout'><ShoppingCartOutlinedIcon/> Checkout (200)</button>
    //                     </li>
    //                     <li className="nav-item dropdown">
    //     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" alt="profile" width="40" height="40" className="rounded-circle"/>ddddddd
    //     </a>
    //     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //       <a className="dropdown-item" href="#">Dashboard</a>
    //       <a className="dropdown-item" href="#">Edit Profile</a>
    //       <a className="dropdown-item" href="#">Log Out</a>
    //     </div>
    //   </li>
    //                 </ul>
    //             </div>
    //                 </div>
    //             </div>

    //    </nav>
  );
};
export default TopNavbar;
