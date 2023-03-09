import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";


const Footer = () => {
return (
  <div className=" main-footer">  
  <Navbar color="dark footer-nav" dark>
      <Container className="nav-cont">
        <NavbarBrand className="footer navbrand">Made with 💓 by Amritanshu</NavbarBrand>
      </Container>
  </Navbar>
  </div>
);
};
export default Footer;


